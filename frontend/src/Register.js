import React,{useState} from "react";
import Axios from "axios"
import {TextField, Paper, Button} from '@mui/material/'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import RegIcon from '@mui/icons-material/HowToReg'
import LoadingButton from '@mui/lab/LoadingButton'

export default function Register(props){
    const [ registerCredintials, setRegisterCredintials ] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: ""
    })
    const [ passwordConfirmed, setPasswordConfirmed ] = useState(false)
    const [loading, setLoading] = useState(false)
    const [ message, setMessage ] = useState("Register")

    const handleRegister = () => {
        setLoading(!loading)
        Axios.post("http://localhost:3001/api/register", registerCredintials)
        .then((response) => {
            setLoading(!loading)
            setMessage("Registration Success")
            setRegisterCredintials({
                username: "",
                password: "",
                firstname: "",
                lastname: ""
            })
        })
        .then(()=>{
            setMessage("Register")
            props.handleRegister()
        })
    }


    return(
        <div className="Login-form" style={{height: '100vh',display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <Paper elevation={12} style={
                {display: 'flex',
                flexDirection: 'column',
                width: '25vw',
                height: '25vw',
                padding: '2vw 1vw',
                borderRadius: '10px',
                alignItems:'center'
                }}
            >
                <span style={{display: 'flex', alignItems: 'center'}}>
                    <PersonAddIcon />
                    <h2>Register</h2>
                </span>
                <TextField
                    id="firstname"
                    label="FirstName"
                    variant="filled"
                    sx={{width: '70%', marginBottom: 1}}
                    onChange={(e) => {
                        setRegisterCredintials(prevValue=>{
                        return {
                            ...prevValue,
                            firstname: e.target.value
                        }
                        })
                    }}
                />
                <TextField
                    id="lastName"
                    label="LastName"
                    variant="filled"
                    sx={{width: '70%', marginBottom: 1}}
                    onChange={(e) => {
                        setRegisterCredintials(prevValue=>{
                        return {
                            ...prevValue,
                            lastname: e.target.value
                        }
                        })
                    }}
                />
                <TextField
                    id="username"
                    label="Username"
                    variant="filled"
                    sx={{width: '70%', marginBottom: 1}}
                    onChange={(e) => {
                        setRegisterCredintials(prevValue=>{
                        return {
                            ...prevValue,
                            username: e.target.value
                        }
                        })
                    }}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    color={passwordConfirmed ? "info" : "error" }
                    sx={{width: '70%', marginBottom: 1}}
                    onChange={(e) => {
                        setRegisterCredintials(prevValue=>{
                        return {
                            ...prevValue,
                            password: e.target.value
                        }
                        })
                    }}
                />
                <TextField
                    id="verify-password"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    color={passwordConfirmed ? "info" : "error" }
                    sx={{width: '70%', marginBottom: 1}}
                    onChange={(e) => {
                        setPasswordConfirmed(() => {
                            return e.target.value === registerCredintials.password ? true : false
                        })
                    }}
                />
                <LoadingButton
                    size="large"
                    color="info"
                    onClick={handleRegister}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<RegIcon />}
                    variant="contained"
                >
                    <span>{message}</span>
                </LoadingButton>
                {/* <Button variant="contained" startIcon={<RegIcon />}>
                    Register
                </Button> */}
                
            </Paper>
        </div>
    )
}