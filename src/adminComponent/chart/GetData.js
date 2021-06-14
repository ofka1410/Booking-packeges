import React,{useEffect,useState} from 'react'
import {Bar} from 'react-chartjs-2'
import {domain} from '../../config'

export default function GetData() {
    
    const [allVacations,setAllVacations]=useState([])
    const [vacationLength,setVacationLength]=useState([])
    useEffect(async() => {
        const res2 = await fetch(`${domain}/FollowAction`)
        const data2= await res2.json()
        console.log(data2)
        setVacationLength(data2.followers_length)
        setAllVacations(data2.followersNames)

    }, [])
   
const state = {
    labels:allVacations,
    datasets: [
      {
        label: 'followers',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: vacationLength
      }
    ]
  }
    return (
        <div className='graph-warper'>
        <Bar
        className='chart' 
          data={state}
          options={{
            title:{
              display:true,
              text:'Followers stats',
              fontSize:30
            },
            legend:{
              display:true,
              position:'right',
              fontSize:30
            }
          }}
        />
      </div>
    )
}
