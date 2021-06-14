import React,{useState} from 'react'
import './search.css'
import {TextField} from '@material-ui/core';
import SearchSend from './SearchSend'

export default function SearchForm({setRefresh,setFollowPost,setNotFollowPost}) {
    const [price,setPrice]=useState('')
    const [country,setCountry]=useState('')
    const [date,setDate]=useState('')

    const refresh=(e)=>{
    setPrice(e)
     if(e.length<=1){
      setRefresh(e)
        }
         }

    const refresh2=(e)=>{
        setCountry(e)
         if(e.length<=1){
          setRefresh(e)
              }
               }

    return (
        <div className='search-warper'>
            <div className='inputs-warper'>
            <TextField 
            onChange={(e)=>{refresh(e.target.value)}}
            type='text' 
            placeholder='price$:'
            variant='outlined'
            className='input-search' 
            ></TextField>
            </div>
            <div className='inputs-warper'>
            <TextField 
            onChange={(e)=>{refresh2(e.target.value)}} 
            placeholder='Country-name'
            type="text"
             className='input-search' 
             variant='outlined'
             ></TextField>
             </div>
             <div className='inputs-warper'>
            <TextField 
            onChange={(e)=>{setDate(e.target.value)}}
            type='date'
            id='dateSearch' 
            className='input-search' 
            variant='outlined'
            ></TextField>
            </div>
            <SearchSend
            setRefresh={setRefresh}
            setFollowPost={setFollowPost}
            setNotFollowPost={setNotFollowPost}
            price={price}
            country={country}
            date={date}
            />
        </div>
    )
}
