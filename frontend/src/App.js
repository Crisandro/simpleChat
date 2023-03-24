import './App.css';
import NavigationBar from "./NavigationBar"
import Chat from "./Chat"
import Axios from "axios"
import Register from "./Register"
import React,{useState,useEffect} from 'react';
import Login from "./Login"
import {Paper} from '@mui/material/'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ showRegister, setShowRegister ] = useState(false)
  Axios.defaults.withCredentials = true
  
  const approveLogIn = (response) =>{
    setLoggedIn(true)
    //setLoggedInUser(response.data.result[0])
  }

  const handleShowRegister = () => {
    setShowRegister( val => !val )
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/api/login")
    .then((response) => {
      if (response.data.loggedIn === true) {
        setLoggedIn(response.data.loggedIn)
      }
      // setLoading(false)
    });
  }, [])

  const logout = () =>{
    Axios.post("http://localhost:3001/api/logout")
    .then((response) => {
      setLoggedIn(false)
    })
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      }
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center'}} elevation={8} >
        <NavigationBar isLoggedIn = {loggedIn} logout={logout}/>
        {loggedIn ? (
          <Chat />
        ):(
          showRegister ? 
            <Register handleRegister={handleShowRegister} />
          :
            <Login handleLogin={approveLogIn} handleRegister={handleShowRegister} />
          
        )
        }
      </Paper>
    </ThemeProvider>
  );
}

export default App;
