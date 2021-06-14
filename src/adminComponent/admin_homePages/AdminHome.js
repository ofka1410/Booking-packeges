import React,{useEffect,useState} from 'react'
import {Container,Grid} from '@material-ui/core';
import './AdminHome.css'
import VacationCard from './VacartionCard'
import {domain} from '../../config'
export default function AdminHome({refresh,setRefresh}) {
    
  const [vacations,setVacations]=useState([])
    useEffect(async() => {
      const res= await fetch(`${domain}/addVacition`)
      const data = await res.json()
      console.log(data)
      setVacations(data)
      console.log(vacations)
      },[refresh]);
    
      return (
      <Container className='homeAdmin-warper'>
   <Grid container  spacing={2} className='vacaitionCard-warper'>
     {vacations.map(item=>{
         return(<VacationCard
             item={item}
             setRefresh={setRefresh}
            />)
       })}
       </Grid>
      </Container>
    )
}
