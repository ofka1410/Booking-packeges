import React,{useEffect,useState} from 'react'
import './home_users.css'
import {Container,Grid} from '@material-ui/core';
import CardPost from './CardPost'
import Card_notFavorite from './Card_notFavorite'
import SearchForm from '../searchForm/SearchForm'
import {domain} from '../../config'
export default function HomePage() {

    const [refresh,setRefresh]=useState()
    const [followPost,setFollowPost]=useState([])
    const [notFollowPost,setNotFollowPost]=useState([])
    const user= (localStorage.getItem('userNow'))
       
    useEffect(async() => {
        setFollowPost([])
        setNotFollowPost([])
        const res= await fetch(`${domain}/FollowAction/${user}`)
        const data = await res.json()
        console.log(data)
         setFollowPost(data.Follows)
         setNotFollowPost(data.notFollow)
        },[refresh]);

       return (
        <Container fluid={true} className='homePage-warper'>
        <Grid className='AllPosts-warper'> 
        <Grid className='searchComp-warper'>
            <SearchForm
            setRefresh={setRefresh}
            setFollowPost={setFollowPost}
            setNotFollowPost={setNotFollowPost}/>
           </Grid>
   
         <Grid  container  spacing={4} className='vacations-row'>

        {followPost.length>0?
      followPost.map(item=>{
      return(<CardPost
      item={item}
      setRefresh={setRefresh}
      />)
     })
    :<></>}
    </Grid>
       <h2 className='suggest'>You also might like:</h2>
        <Grid container spacing={2} className='vacations-row'>
          {notFollowPost.length>0?
            notFollowPost.map(item=>{
             return(<Card_notFavorite
              item={item}
               setRefresh={ setRefresh}
              />)
               }):<h1>No results</h1>}
            </Grid>
               </Grid>
                </Container>
   
         )
           }
