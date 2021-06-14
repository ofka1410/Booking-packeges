import  {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { TextField,Container,Button,FormControl } from '@material-ui/core';
import {Link} from "react-router-dom";
import {domain} from '../config'

//------styles
const useStyle = makeStyles({
    root: {
        flexGrow: 1,
         display:"flex",
        alignItems:'center',
        justifyContent:'center'
      },
      blocks:{
        border: "1px solid grey",
        minWidth:"400px",
        paddingBottom:'30px',
        marginTop:'50px',
        background:'rgb(223, 229, 245)',
        opacity:'0.9',
        marginBottom:'20px'  
      },
      btLog:{
        backgroundColor: "#0095f6" ,
        opacity:0.9,
        width:"268px",
        height:'30px',
        marginTop: '10px',
        color:'white'
        
      },
      input:{
width:"268px",
height: "38px",
marginBottom:'5px',
borderTop:'1px solid grey',
background: '#FAFAFA',
      },
      header:{
       marginTop:"20px",
      }
})




//--------Component-------



export default function LogUp({setToken}) {
    const classes =useStyle()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [lastName,setLastName]=useState('')
    
    const addUser= async(e)=>{
    e.preventDefault()
    console.log(password,email,username)
    try{
    const res2 = await fetch(`${domain}/addUser`,
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                username: username,
                email:email,
                password:password,
                name:name,
                lastName:lastName
            }
            )
           }
         )
    const data2= await res2.json()
    
    alert(data2.status)
}
catch(err){
    console.log(err)
}
   
}


    return (  
        <Container className={classes.root}>
        <div  className={classes.blocks}>
            <div>
     <FormControl>
     <h1 className={classes.header}>
     <img src='https://cdn.worldvectorlogo.com/logos/bookingcom.svg' className='logo'/>
     </h1>
         <div>
           <TextField className={classes.input} placeholder='UserName:' type='text' onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div>
            <TextField className={classes.input} placeholder='password:' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div>
            <TextField className={classes.input} placeholder='email:' type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
            <TextField className={classes.input} placeholder='First name:' type='text' onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div>
            <TextField className={classes.input} placeholder='Your lastName:' type='text' onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>
            <div>
            <Button className={classes.btLog} type='button'  onClick={addUser}>Log up</Button>
            </div>
            </FormControl>
            <div>
                <p>-----------  OR  -----------</p>
            </div>
           <div style={{marginTop:'10px'}}>
           <span>Have an account?</span> <Link className='links'  to="/Login">Log in</Link>
            </div>
            </div>
        </div>
        </Container>
    )
}
