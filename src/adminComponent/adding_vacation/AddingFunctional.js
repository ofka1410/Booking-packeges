import React from 'react'
import Button from '@material-ui/core/Button'; 
import {domain} from '../../config'
export default function AddingFunctional({description,price,img,checkIn, checkOut,setRefresh,name}) {
const addPost= async()=>{
    const res2 = await fetch(`${domain}/addVacition`,
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
         description:description,
         price:price,
         img:img,
         checkIn:checkIn,
         checkOut:checkOut,
         name:name
            }
            )
       
    }
    )
    const data= await res2.json()
    setRefresh(data.status)
}

    return (
        <div>
         <Button onClick={addPost} variant='outlined' color="primary">
          Share
        </Button>
        </div>
    )
}
