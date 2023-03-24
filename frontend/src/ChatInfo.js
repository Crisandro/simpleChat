import React,{useState, useEffect} from "react"
import {List, Box, Modal, Card, CardContent, Typography, CardActions, Button, Paper, Stack, TextField, Avatar, Tooltip, Alert, AlertTitle} from '@mui/material/'
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Axios from "axios"

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

export default function ChatInfo(props){
    const [loading, setLoading] = useState(false)
    const [ message, setMessage ] = useState("")
    const [ chatHistory, setChatHistory ] = useState([{}])
    const [open, setOpen] = useState(false);

    function stringAvatar(name) {
        let firstLetter = name.split(' ')[0][0] === undefined ?  '' : name.split(' ')[0][0]
        let secondLetter = name.split(' ')[1][0] === undefined ?  '' : name.split(' ')[1][0]
        return {
            sx: {
            bgcolor: stringToColor(name),
            },
            children: `${firstLetter}${secondLetter}`,
        };
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        color: '#fff',
        boxShadow: 24,
        p: 4,
    };

    const dateString = (date) => {
        if( date === undefined ) {
            return ""
        }else{
            const year = date.split("T")[0]
            const month = year.split("-")[1]
            const day = year.split("-")[2]
            const time = date.split("T")[1].split(".")[0]
            const hour = time.split(":")[0]
            const finalhour = hour > 12 ? hour - 12 : hour
            const min = time.split(":")[1]
            const isPM = hour > 12 ? "PM" : "AM"
            var monthString = ""
            if( month === '01' ) monthString = "Jan"
            else if( month === '02' ) monthString = "Feb"
            else if( month === '03' ) monthString = "Mar"
            else if( month === '04' ) monthString = "Apr"
            else if( month === '05' ) monthString = "May"
            else if( month === '06' ) monthString = "Jun"
            else if( month === '07' ) monthString = "Jul"
            else if( month === '08' ) monthString = "Aug"
            else if( month === '09' ) monthString = "Sep"
            else if( month === '10' ) monthString = "Oct"
            else if( month === '11' ) monthString = "Nov"
            else if( month === '12' ) monthString = "Dec"

            return  monthString + " " + day + " | " + finalhour + ":" + min + " " + isPM
        } 
    }
    
    useEffect(()=>{
        let chatwindow = document.getElementById("chatWindow")
        chatwindow.scrollTo(0, chatwindow.scrollHeight)

        Axios.post("http://localhost:3001/api/messages",props.userDetails)
        .then((response) => {
            setChatHistory(response.data)
        });
    },[props.userDetails])

   

    const sendMessage = () => {
        setLoading(val => !val)
        Axios.post("http://localhost:3001/api/send",{message:message,to: props.userDetails.seconduser_id})
        .then((response) => {});
        Axios.post("http://localhost:3001/api/messages",props.userDetails)
        .then((response) => {
            setChatHistory(response.data)
            setLoading(val => !val)
            setMessage("")
        });
    }

    const History = chatHistory.map(messages => 
        <div 
            key={messages.chat_id}
            className={messages.seconduser_id === props.userDetails.seconduser_id ? 'Endflex' : 'Startflex'}
        >
            <Card>
                <CardContent>
                    <Typography gutterBottom color="grey" variant="span" component="div" sx={{textAlign: messages.seconduser_id === props.userDetails.seconduser_id ? 'right':'left' }}>
                        {messages.seconduser_id === props.userDetails.seconduser_id ? 'You  ' + messages.date_sent === undefined ? "" : dateString(messages.date_sent) : props.userDetails.firstname + "  " + messages.date_sent === undefined ? "" : dateString(messages.date_sent)}
                    </Typography>
                    <Typography variant="h7" >
                        {messages.chat_message}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleDeleteMessage(messages)} >Delete</Button>
                </CardActions>
            </Card>
            
        </div>
    )

    const handleDeleteMessage = (message) => {
        setOpen(true)
        console.log(message)
        Axios.post("http://localhost:3001/api/deletemessage",message)
        .then((response) => {});
        Axios.post("http://localhost:3001/api/messages",props.userDetails)
        .then((response) => {
            setChatHistory(response.data)
        });
    }

    return(
        <Paper elevation={24} sx={{
            height: '98%',
            width: '100%',
            display: 'flex', 
            flexDirection:'column', 
            justifyContent:'flex-end',
            alignItems:'center',
            gap: '10px'
        }}>
            <Paper elevation={2} sx={{
                width: '100%',
                display: 'flex',
                alignItems:'center',
                gap: '20px',
                padding: '15px 15px',
                marginLeft: '15px',

            }}>
                <Avatar {...stringAvatar(`${props.userDetails.firstname} ${props.userDetails.lastname}`)} />
                {props.userDetails.firstname}
            </Paper>
            <List
                sx={{
                    height: '100%',
                    minHeight: '80%',
                    width: '100%',
                    padding: 0,
                    position: 'relative',
                    overflowY: 'auto',
                }}
                elevation={24}
            >
                <Stack
                    id="chatWindow"
                    sx={{
                        width: '98%',
                        marginBottom: '10px',
                        bottom: '0',
                    }}
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="stretch"
                    spacing={2}
                >
                    {History}
                </Stack>
            </List>
            
            <Box sx={{width:'100%',display:'flex',gap: '2px'}}>
                <TextField
                    fullWidth 
                    id="message"
                    label="Message"
                    multiline
                    value={message}
                    onChange={(event)=> setMessage(event.target.value)}
                    maxRows={4}
                />
                <LoadingButton
                    size="large"
                    color="info"
                    onClick={sendMessage}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                    variant="contained"
                >
                    <span>Send</span>
                </LoadingButton>
            </Box>
        </Paper>
    )
}