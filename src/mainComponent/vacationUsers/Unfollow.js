import React from 'react'
import{Button} from '@material-ui/core';
import './card.css'
import { useState } from 'react';
 import {domain} from '../../config'
export default function Ufollow({item,setRefresh}) {
const [followLength,setFollowLength]=useState(0)
    const user= (localStorage.getItem('userNow'))

       const addFollow= async()=>{
         const res2 = await fetch(`${domain}/UNFollowAction`,
           {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
             description:item.vacation.description,
             username:user
                }
                )
             }
            )
            const data= await res2.json()
              setRefresh(Math.floor()*100)
               }

            const findFollowers= async()=>{
             const res= await 
              fetch(`${domain}/getPostFollowers/${item.vacation.name}`)
               const data= await res.json()
                console.log(data)
                 setFollowLength(data.length)
                        }

           return (
           <div>
            <Button
             onMouseEnter={findFollowers}
             onMouseLeave={()=>setFollowLength(0)}
             onClick={addFollow}
              className='unfollow-bt'  
              style={{
                  background:'rgb(48, 87, 172) ',
                  color:'white',
                    marginTop:'10px',
                    marginBottom:'10px'
                  }} 
                  variant="outlined" 
                  className>unfollow</Button>
                      {followLength>0?
                      <div className='followers-warper'>
                      <p className='follower-num'>number of followers:<strong>{followLength}</strong></p>
                      </div>
                    :<></>}
                          </div>
                 )
                }
