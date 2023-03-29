import React,{useState, useEffect} from "react"
import {TextField, Box, Avatar, Badge, IconButton, Paper, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material/'
import Axios from "axios"
import { styled } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 10,
        top: '50%',
        padding: '10 10px',
    },
}));

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

function stringAvatar(name) {
    let firstLetter = name.split(' ')[0][0] === undefined ?  '' : name.split(' ')[0][0]
    let secondLetter = name.split(' ')[1][0] === undefined ?  '' : name.split(' ')[1][0]
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${firstLetter}`,
    };
}

export default function ContactList(props){
    const [ userList , setUserList ] = useState([{}])
    const [ searchUser, setSearchUser ] = useState({
        search: ''
    })
    const [ searchedUsers, setSearchedUsers ] = useState([])

    // useEffect(()=> {
        
    // },[])

    Axios.get("http://localhost:3001/api/users")
    .then((response) => {
        setUserList(response.data)
    });
    

    useEffect(() => {
        Axios.post(`http://localhost:3001/api/searchusers`,searchUser)
        .then((response) => {
            setSearchedUsers(response.data)
        });
    }, [searchUser])

    const searchFunction = (event) => {
        setSearchUser({ search: event.target.value })
    }
    
    

    const ListofUsers = userList.map( userData => {
        return (
            <ListItem key={userData.id} component="div" disablePadding 
                // secondaryAction={
                //     <div>
                //         <IconButton edge="end" aria-label="delete" >
                //             <DeleteIcon color="error" />
                //         </IconButton>
                //     </div>
                // }
            >
                <ListItemButton onClick={() => props.selectUser(userData)} >
                    <ListItemIcon>
                        <Avatar {...stringAvatar(`${userData.firstname} ${userData.lastname}`)} />
                    </ListItemIcon>
                    <ListItemText primary={`${userData.firstname} ${userData.lastname}`} />
                    {/* <StyledBadge badgeContent={userData.unread} color="info"></StyledBadge> */}
                </ListItemButton>
            </ListItem>
        )
    })

    const Listofsearch = searchedUsers.map( userData => {
        return (
            <ListItem key={userData.id} component="div" disablePadding 
                // secondaryAction={
                //     <div>
                //         <IconButton edge="end" aria-label="delete" >
                //             <DeleteIcon color="error" />
                //         </IconButton>
                //     </div>
                // }
            >
                <ListItemButton onClick={() => props.selectUser(userData)} >
                    <ListItemIcon>
                        <Avatar {...stringAvatar(`${userData.firstname} ${userData.lastname}`)} />
                    </ListItemIcon>
                    <ListItemText primary={`${userData.firstname} ${userData.lastname}`} />
                    {/* <StyledBadge badgeContent={userData.unread} color="info"></StyledBadge> */}
                </ListItemButton>
            </ListItem>
        )
    })


    return(
        <Paper
            sx={{ width: '100%',height: '100%', maxWidth: 360}}
            aria-label="contacts"
            elevation={2}
        >
           <ListItem sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="search" label="search users" variant="standard" onChange={searchFunction} value={searchUser.search} />
            </ListItem>
            {userList.length === 0 && 
                <ListItem sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <ListItemText primary={`search for a user`} />
                </ListItem>
            }
            {searchUser.search === "" ? ListofUsers : Listofsearch} 
        </Paper>
    )
}
