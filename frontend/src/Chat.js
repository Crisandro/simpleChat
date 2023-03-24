import React,{useState} from "react"
import {Box, Divider, Paper} from '@mui/material/'
import ContactList from "./ContactList"
import ChatInfo from "./ChatInfo"

export default function Chat(){
    const [ selectedUser, setSelectedUser ] = useState([])

    const handleSelectUser = (userData) => {
        setSelectedUser(userData)
    }

    return(
        <Box
            sx={{ width: '100%', height: '95vh', display: 'flex', gap: '2px'}}
        >
            <ContactList selectUser={handleSelectUser} />
            <Divider orientation="vertical" flexItem />
            {selectedUser.length === 0 ? (
                <Paper elevation={8} sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    Search users to start chatting .
                </Paper>
            ): (  
                <ChatInfo userDetails={selectedUser}/>
            )}
        </Box>
    )
}