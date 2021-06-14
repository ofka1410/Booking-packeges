import React,{useState} from 'react'
import{Button} from '@material-ui/core';
import './card.css'
import {domain} from '../../config'
export default function Follow({item,setRefresh}) {
    const [followLength,setFollowLength]=useState(0)
    const user= (localStorage.getItem('userNow'))
    const findFollowers= async() => {
        console.log(item.name)
        const res= await 
        fetch(`${domain}/getPostFollowers/${item.name}`)
        const data= await res.json()
        console.log(data)
        setFollowLength(data.length)
      };
   
    const addFollow= async()=>{
        const res2 = await fetch(`${domain}/FollowAction`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
             description:item.description,
             username:user
                }
                ) 
        }
        )
        const data= await res2.json()
        setRefresh(item.description)
    }
    

    return (
        <div>
            <Button 
             onMouseEnter={findFollowers}
             onMouseLeave={()=>setFollowLength(0)}
            onClick={addFollow}
               variant="outlined"
                   style={{
                   marginTop:'10px',
                   marginBottom:'10px'
                      }}
                   className>Follow</Button>
                     {followLength>0?
                       <div className='followers-warper'>
                        <p className='follower-num'>
                            number of followers:
                            <strong>{followLength}</strong>
                              </p>
                               </div>
                                  :<></>}
                                      </div>
                          

            )
              }