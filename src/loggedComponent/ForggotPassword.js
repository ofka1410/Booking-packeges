import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import {domain} from '../config'

import {TextField,Typography,Dialog,Button,IconButton }from '@material-ui/core';
import './Log.css'
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);





export default function ForggotPassword({username,email}) {
  const [open, setOpen] = React.useState(false);
  const [name,setName] =useState(username)
  const [emails,setEmails] =useState(email)

  const forggotEmail = async(e)=>{
    e.preventDefault()
    console.log(emails)
    const res = await fetch(`${domain}/passwordrepeat`,
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                username: name,
                email:emails,
            }
            )
    }
    )
    const data= await res.json()
    alert(data.status)
  
  }
  const handleClickOpen = () => {

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Forggot password?
      </Button>
      <Dialog  
      onClose={handleClose} 
      aria-labelledby="customized-dialog-title" 
      open={open}
      className='dialog-warper'>
        <div className="forggot_header">
            <div>
        <DialogTitle 
        id="customized-dialog-title"
         onClose={handleClose}
         className='password-header'>
        Password recovery
        </DialogTitle>
          </div>
          <div>
             <img className='logo' src='https://cdn.worldvectorlogo.com/logos/bookingcom.svg'/>
          </div>
        </div>
        <DialogContent dividers>
          <Typography gutterBottom>
           If you forggot your password, Write your user email here.
          And we will send you your current password
          </Typography>
          <Typography gutterBottom>
         <TextField 
         placeholder='user@gmail.com'
        onChange={(e)=>{setEmails(e.target.value)}}>
         </TextField>
          </Typography>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={forggotEmail} autoFocus color="primary">
            Send email
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
