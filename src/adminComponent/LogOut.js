import React from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
export default function LogOut({setToken}) {
    let history= useHistory()
    const loginOut=()=>{
        localStorage.clear()
         
       setToken("")
       history.push('./Logged')
    }
    return (<Button variant='outlined' className='logout-bt' onClick={loginOut} color="inherit">LogOut</Button>)
}
