import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,IconButton,Typography,Grid} from '@material-ui/core';
import LogOut from '../adminComponent/LogOut'
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";
import './mainNav.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function MainNav({setToken}) {

  const classes = useStyles();

    return (        
      <div className={classes.root}>
      <AppBar style={{
        position:"fixed",
        top:0}}>
        <Toolbar>
          <Grid className='links-warper'>
          <Grid>
           <img src='https://cdn.worldvectorlogo.com/logos/bookingcom.svg' className='logo'/>
           </Grid>
          
   
        <Grid>
        <Typography variant="h6" noWrap>
          <IconButton>
         <Link className='icons-admin' to='/'>
           <HomeIcon style={{ fontSize: 35 ,paddingTop:"10px"}} />
           </Link> 
        </IconButton> 
        <LogOut
           setToken={setToken}
           /> 
          </Typography>
        </Grid>

         
          </Grid>
          
        </Toolbar>
      </AppBar>
    </div>
    )
}

 

          //  
          //  src='https://proptechzone.com/wp-content/uploads/2019/10/Booking-2d49b521-6dd5-4431-8eb9-c114c5e39c83-3.png'/>

          // 