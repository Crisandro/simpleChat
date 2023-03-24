import React,{useState} from "react";
import Axios from "axios"
import {TextField, Paper, Button} from '@mui/material/'
import LoginIcon from '@mui/icons-material/Login'
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Login(props){
    const [loginCred, setLoginCred] = useState({
        username : "",
        password : ""
    })
    const [status , setStatus]= useState("")

    const login = () => {
        Axios.post("http://localhost:3001/api/login", loginCred)
        .then((response) => {
            if( response.data.loggedIn ){
                props.handleLogin(response)
            }else{
                setStatus(response.data.message)
            }
        })
    }

    return(
        <div className="Login-form" style={{height: '100vh',display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <Paper elevation={12} style={
                {display: 'flex',
                 flexDirection: 'column',
                 width: '20vw',
                 height: '13vw',
                 padding: '2vw 1vw',
                 borderRadius: '10px',
                 alignItems:'center'
                }}
            >
                <span style={{display: 'flex', alignItems: 'center'}}>
                    <LockOpenIcon />
                    <h2>Login</h2>
                </span>
                <TextField
                    id="filled-helperText"
                    label="Username"
                    variant="filled"
                    sx={{width: '70%', marginBottom: 1}}
                    onChange={(e) => {
                        setLoginCred(prevValue=>{
                        return {
                            ...prevValue,
                            username: e.target.value
                        }
                        })
                    }}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    sx={{width: '70%', marginBottom: 1}}
                    onChange={(e) => {
                        setLoginCred(prevValue=>{
                        return {
                            ...prevValue,
                            password: e.target.value
                        }
                        })
                    }}
                />
                <div style={{display:'flex', justifyContent: 'space-around', width:'70%'}}>
                    <Button onClick={login} variant="contained" startIcon={<LoginIcon />}>
                        Login
                    </Button>
                    <Button onClick={props.handleRegister} variant="contained" startIcon={<LoginIcon />}>
                        Register
                    </Button>
                </div>
                
            </Paper>
            
            {status && 
                <div
                    style={{
                        marginTop: '20px',
                        color: 'red'
                    }}
                >
                    {status}
                </div>
            }

        </div>
    )
}