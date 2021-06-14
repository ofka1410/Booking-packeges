import  {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Link} from "react-router-dom";
import { TextField,Container,Button,FormControl } from '@material-ui/core';
import './ForggotPassword'
import {domain} from '../config'
import  ForggotPassword from './ForggotPassword';
/*designed*/
const useStyle = makeStyles({
    root: {
        flexGrow: 1,
         display:"flex",
        alignItems:'center',
        justifyContent:'center',
        zIndex:1000,
      },
      blocks:{
        border: "1px solid grey",
        minWidth:"400px",
        paddingBottom:'30px',
        marginTop:'50px',
        background:'rgb(223, 229, 245)',
        opacity:'0.9' 
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

//functions

export default function LogIn({setToken}) {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
    const classes =useStyle()


    //check if user have a profile
    const  userIn = async(e)=>{
        e.preventDefault()
        const res2 = await fetch(`${domain}/addUser`)
       const data2= await res2.json()
       for(let i=0; i<data2.length;i++){
          if (data2[i].username ===username|| data2[i].password === password){
              if (data2[i].username=='admin'){
                localStorage.setItem('userNow','admin')
                setToken('admin')
              }
              else{
                localStorage.setItem('userNow',username)
                setToken('ok')
              }
           
          }
       }
    }
    const checks =async()=>{
      const res2 = await fetch(`${domain}/check`)
      const data2= await res2.json()
      alert(data2)
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
            <TextField className={classes.input} placeholder='password:' type='password'
            onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div>
            <TextField className={classes.input} placeholder='email:' type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
            <Button className={classes.btLog} type='button'  onClick={userIn}>Log in</Button>
            </div>
            </FormControl>
            <div>
                <p>-----------  OR  -----------</p>
            </div>
            <div>
            <ForggotPassword
            username={username}
            email={email}/>
            </div>
            <div style={{marginTop:'10px'}}> 
          <span>Don't have an account?</span>  <Link className='links'  to="/LogUp">Sign up</Link>
            </div>
            </div>
            <button onClick={checks}>check</button>
        </div>
      
        </Container>
    )
}
