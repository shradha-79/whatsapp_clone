import React from 'react'
import { Box, makeStyles, InputBase } from '@material-ui/core'
import { EmojiEmotionsOutlined, AttachFile, Mic, SettingsOverscanOutlined } from '@material-ui/icons'

const useStyles = makeStyles(theme =>({
    footer: {
        height: '46px',
        background: '#ededed',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        '& > *': {
            margin: 5,
            color: '#919191'
        }
    },
    clipIcon: {
        transform: 'rotate(40deg)'
    },
    searchBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        width: '85%'
    },
    inputRoot: {
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1,1,1,0),
        paddingLeft: 25,
        fontSize: 14,
        width: 'calc(95%-100px)',
        height: 20
    }
}))
const Footer = ({ sendText, setValue, value }) => {
    const classes = useStyles();
  return (
    <Box className={classes.footer}>
        <EmojiEmotionsOutlined/>
        <AttachFile className={classes.clipIcon}/>
        <Box className={classes.searchBox}>
            <InputBase placeholder='Type a message'
             classes={{
                 root: classes.inputRoot,
                 input: classes.inputInput,
             }}
             inputProps={{ 'aria-lable': 'search' }} 
             onKeyPress = {(e) => sendText(e)}
             onChange = {(e) => setValue(e.target.value)}
             value = {value}/> 
        </Box>
        <Mic/>
    </Box>
  )
}

export default Footer