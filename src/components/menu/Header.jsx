import React, { useContext, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core'
import { Chat } from '@material-ui/icons';
import { AccountContext } from '../../context/AccountProvider';
import HeaderMenu from './HeaderMenu';
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles({
  header: {
    height: 35,
    background: '#ededed',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: '50%'
  },
  icons: {
    marginLeft: 'auto',
    '& > *': {
      marginLeft: 2,
      padding: '2px',
      color: '#919191'
    },
    '& :first-child': {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3
    }
  }

})
// Header of Left component 
const Header = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  //usestate for drawer
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(true);
  }

  return (
    <>
      <Box className={classes.header}>
        {/* profile image */}
        <img src={account.imageUrl} onClick={() => toggleDrawer()} alt="display-picture" className={classes.avatar} />
        <Box className={classes.icons}>
          {/* chat icon */}
          <Chat />
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer open ={open} setOpen ={setOpen}/>
    </>

  )
}

export default Header