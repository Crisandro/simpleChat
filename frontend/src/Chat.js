import React,{useState} from "react"
import {Box, Divider, Paper, Backdrop, CircularProgress} from '@mui/material/'
import ContactList from "./ContactList"
import ChatInfo from "./ChatInfo"

export default function Chat(){
    const [ selectedUser, setSelectedUser ] = useState([])
    const [open, setOpen] = useState(false);

    const handleSelectUser = (userData) => {
        setOpen(true)
        setSelectedUser(userData)
    }

    return(
        <Box
            sx={{ width: '100%', height: '95vh', display: 'flex', gap: '2px'}}
        >
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

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
                <ChatInfo userDetails={selectedUser} setOpen={setOpen}/>
            )}
        </Box>
    )
}
