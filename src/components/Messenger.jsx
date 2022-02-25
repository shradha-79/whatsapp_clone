import React, { useContext }  from 'react';
import Login from './account/Login';
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import { AccountContext } from '../context/AccountProvider';
import ChatBox from './ChatBox';

// we add css in material ui using makestyles
const useStyles = makeStyles({
    component: {
        background: "#DCDCDC",
        height: '100vh'
    },
    loginHeader: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    header: {
        height: 115,
        background: '#128C7E',
        boxShadow: 'none'
    }
})

const Messenger = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext)
    return (
        //React.Fragment or empty tags are preffered to use in enlosed tab. It is fasterand takes less memory 
        <>
            <Box className={classes.component}>
                <AppBar className={ account? classes.header :classes.loginHeader}>
                    <Toolbar></Toolbar>
                </AppBar>
                {/* if user is logged in then render to to ChatBox else Login */}
                { account? <ChatBox/> : <Login />}
            </Box>

        </>
    )
}

export default Messenger