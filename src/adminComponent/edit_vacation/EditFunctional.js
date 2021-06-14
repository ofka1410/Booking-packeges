import React from 'react'
import {Button} from '@material-ui/core';
import {domain} from "../../config"
export default function EditFunctional({description,
    price,img,checkIn, checkOut,item,setRefresh})
     {

    const editPost= async()=>{
        const res2 = await fetch(`${domain}/changeVacation`,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
             CurrentDescription:item.description,
             description:description,
             price:price,
             img:img,
             checkIn:checkIn,
             checkOut:checkOut
                }
                )
           
        }
        )
        const data= await res2.json()
        setRefresh(data.status)
    }
    
    return (
        <div>
           <Button variant='outlined' onClick={editPost}>Eddit</Button>  
        </div>
    )
}
