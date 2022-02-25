import React, { useState, useContext } from 'react';
import { MoreVert } from '@material-ui/icons';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../../constant/Data';
import { AccountContext } from '../../context/AccountProvider';
import Drawer from '../drawer/InfoDrawer';

const useStyle = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4a4a4a'

    },
    Logout: {
        border: 'none!important',
        boxShadow: 'none!important',
        '&>*': {
            padding: '0px!important'
        }

    }

})
//that 3 dots in header in left component 
const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const { setAccount } = useContext(AccountContext);
    const classes = useStyle();

    //set anchorEl as false to close the menu
    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget);

    }
    const onLogoutSuccess = () => {
        alert("loggedout");
        setAccount('');
        console.log("hii")
        console.clear();
    }
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem className={classes.menuItem} onClick={() => {handleClose(); toggleDrawer()}}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                        className={classes.Logout}
                    >
                    </GoogleLogout>
                </MenuItem>
            </Menu>
            <Drawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default HeaderMenu;