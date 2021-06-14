
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddingVacation from './AddingVacation'
import CancelIcon from '@material-ui/icons/Cancel';
import '../addingVac.css'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight:'650px',
 
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddVAC({setRefresh}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddBoxIcon onClick={handleOpen}/>  
      <Modal
      className='add-modal'
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
          
        <Fade in={open}>
          <div className={classes.paper}>
            <CancelIcon  onClick={handleClose}/>
           <AddingVacation  setRefresh={setRefresh}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}