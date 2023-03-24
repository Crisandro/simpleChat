const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { v4: uuidv4 } = require('uuid')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cookieSession = require('cookie-session')

app.use(express.json())
app.use(cookieParser())

app.set('trust proxy', 1)

app.use(cookieSession({
    name: 'session',
    keys: ["crischatkey"],
    // sameSite: 'none',
    // httpOnly: false,
    // proxy: true,
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const corsOption = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))

const db = mysql.createConnection({
    user: "assessmentno4",
    host: "db4free.net",
    password: "crisandro",
    database: "foneapichat",
})

app.use(session({
    key: "user",
    secret: "someRandomS3cr3ts",
    resave: false,
    saveUninitialized: false,
    proxy: true,
    // httpOnly: false,
    sameSite: 'none',
    cookie: {
        secure: true, // required for cookies to work on HTTPS
        sameSite: 'none',
        // httpOnly: false,
    }
}))

app.get('/',cors(corsOption),(req,res)=>{
    res.send({ 
        sessionID : req.session.id, 
        user: req.session.user,
        username: req.session.user[0].username,
        firstname: req.session.user[0].firstname,
        lastname: req.session.user[0].lastname
    })
})

app.post("/api/register",cors(corsOption), (req, res) => {
    const {firstname,lastname,username,password} = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query(`INSERT INTO users (id, username, password, firstname, lastname) VALUES (null, '${username}','${hash}','${firstname}','${lastname}')`,
        (err, result) => {
            res.send({result: `${username} has been added`})
        });
    });
});

app.post("/api/login",cors(corsOption), (req, res) => {
    const {username, password}= req.body;

    db.query(
        `SELECT * FROM users WHERE username = '${username}'`,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    req.session.user = result
                    req.session.id = uuidv4()
                    res.send({ loggedIn: true , result })
                } else {
                    res.send({ message: "Wrong username/password combination!" , loggedIn: false });
                }
                });
            } else {
                res.send({ message: "User doesn't exist" , loggedIn: false })
            }
        }
    );
});

app.get("/api/login",cors(corsOption),(req,res)=>{
    if( req.session.user ){
         res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})

app.post("/api/logout",cors(corsOption),(req,res)=>{
    req.session = null
    res.send({ loggedIn: false })
})

app.get("/api/users",cors(corsOption),(req,res) => {
    db.query(`SELECT DISTINCT seconduser_id, SUM(CASE WHEN view is null THEN 1 ELSE 0 END) AS unread, users.firstname, users.lastname FROM chat LEFT JOIN users ON chat.seconduser_id = users.id WHERE NOT users.id = ${req.session.user[0].id} GROUP BY seconduser_id`,
    (err, result) => {
        res.send(result)
    })
})

app.post("/api/send",cors(corsOption),(req,res) => {
    const {message,to} = req.body;
    db.query(`INSERT INTO chat (chat_id, chat_message, date_sent, firstuser_id, seconduser_id, view) VALUE (null, '${message}', NOW(), ${req.session.user[0].id}, ${to}, null)`,
    (err, result) => {
        res.send({message: "done"})
    })
})

app.post("/api/messages",cors(corsOption),(req,res) => {
    const {seconduser_id} = req.body;
    db.query(`SELECT * FROM chat WHERE firstuser_id = ${req.session.user[0].id} OR seconduser_id = ${req.session.user[0].id}`,
    (err, result) => {
        const finaldata = result.filter( data => data.firstuser_id === seconduser_id || data.seconduser_id === seconduser_id )
        res.send(finaldata)
    })
})

app.post("/api/deletemessage",cors(corsOption),(req,res) => {
    const {chat_id} = req.body;
    db.query(`DELETE FROM chat WHERE chat_id = ${chat_id}`,
    (err, result) => {})
})

app.post("/api/searchusers",cors(corsOption),(req,res) => {
    const {search} = req.body;
    db.query(`SELECT id AS seconduser_id, firstname, lastname, username FROM users WHERE NOT id = ${req.session.user[0].id} AND firstname LIKE '${search}%' OR lastname LIKE '${search}%'`,
    (err, result) => {
        res.send(result)
    })
})

const port = process.env.PORT || 3001

app.listen(port, ()=> {
    console.log("running on port 3001")
})