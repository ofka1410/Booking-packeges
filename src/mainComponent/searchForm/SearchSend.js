import React from 'react'
import { Button } from '@material-ui/core';
import {domain} from '../../config'
export default function SearchSend({setRefresh,setFollowPost,setNotFollowPost,price,country,date}) {
    const user= (localStorage.getItem('userNow'))
    const searchActive=async()=>{
      const obj={
          unsername:user,
          price:price,
          country:country,
          date:date
      }  
      const res= await fetch(`${domain}/searchAction/${JSON.stringify(obj)}`)
      const data = await res.json()
      console.log(data)
      setNotFollowPost(data.array)
      setFollowPost([])
      }

   
      return (
        <>
        <Button onClick={searchActive}  className='search-bt' variant='outlined'>
        Search
         </Button>
          </>
        )
}
