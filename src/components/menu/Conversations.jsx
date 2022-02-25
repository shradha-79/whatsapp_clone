import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { getUsers } from '../../service/api'
import { Box, makeStyles } from '@material-ui/core'
import Conversation from './Conversation'
import { AccountContext } from '../../context/AccountProvider'

const useStyles = makeStyles({
  component: {
    height: '81vh',
    overflow: 'overlay'
  }
})
//conversations in left  component
const Conversations = ({ text }) => {

  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      //data.data consist array of usersdata and if there is somethiing in search bar it will show accoding to that else it will show all users.
      const filteredData = data.data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
      setUsers(filteredData)
    }
    fetchData();
  }, [text])

  useEffect(() => {
    socket.current.emit('addUser',account.googleId)
    socket.current.on('getUsers',users =>{
      setActiveUsers(users)
    })
  }, [account])
  
  return (
    <Box className={classes.component}>
      {users.map(user => (
        user.googleId !== account.googleId &&
        <Conversation user={user} />
      ))}
    </Box>
  )
}

export default Conversations;