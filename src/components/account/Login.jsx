import { useContext } from 'react';
import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../../context/AccountProvider';
import { clientId } from '../../constant/Data';
import { addUser } from '../../service/api';

//adding css using makestyles
const useStyles = makeStyles({
    components: {
        display: 'flex'
    },
    leftComponent: {
        padding: '56px 0 0 50px'
    },
    qrCode: {
        height: 264,
        width: 264,
        padding: '50px  0 0 50px'
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300
    },
    list: {
        '&> *': {
            fontSize: 18,
            padding: 0,
            marginTop: 15,
            lineHeight: '28px'
        }
    }
})
//overwritting css
const style = {
    dialogPaper: {
        height: '95%',
        width: '60%',
        marginTop: '12%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
    }
}
const Login = ({ classes }) => {
    const classname = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

    const { account, setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res)=>{
        console.log("success", res.profileObj);
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }
    const onLoginFailure=()=>{
        console.log("failed");
    }
    return (
        <>
            <Dialog open={true} classes={{ paper: classes.dialogPaper }} BackdropProps={{ style: { backgroundColor: 'unset' } }}>
                <Box className={classname.components}>
                    <Box className={classname.leftComponent}>
                        <Typography className={classname.title}>To use whatsApp on your computer: </Typography>
                        <List className={classname.list}>
                            <ListItem>1. Open  whatsapp on your phone</ListItem>
                            <ListItem>2. Tap Menu or settings and select Linked devices</ListItem>
                            <ListItem>1. Point your phone to this screen to capture the code</ListItem>
                        </List>
                    </Box>
                    <Box style={{position: 'relative'}}>
                        <img src={qrurl} alt="qr" className={classname.qrCode} />
                        <Box style={{position: 'absolute', left:'50%', top: '50%'}}>
                        <GoogleLogin clientId={clientId}
                            buttonText=""
                            isSignedIn={true}
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'} />
                        </Box>
                        
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default withStyles(style)(Login);