import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddVAC from './adding_vacation/AddVAC';
import LogOut from './LogOut'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";
import './navBar.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AdminNav({token,setToken,setRefresh}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{
        position:"fixed",
        top:0}} position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           Add vacaition<AddVAC
           setRefresh={setRefresh}/>
          </IconButton>
          </Typography>
<IconButton>
  <Link className='icons-admin' to='/Graph'><EqualizerIcon/></Link>
</IconButton>
<IconButton>
 <Link className='icons-admin' to='/'><HomeIcon/></Link> 
</IconButton>

         <LogOut
           setToken={setToken}
           />
        </Toolbar>
      </AppBar>
    </div>
  );
}