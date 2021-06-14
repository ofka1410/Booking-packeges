import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import{IconButton} from '@material-ui/core';
import EditModal from './EditModal'
import {domain} from "../../config"
export default function EditIcons({item,setRefresh}) {
const deleteHandller= async()=>{
    const res2 = await fetch(`${domain}/deleteVacation`,
    {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
         description:item.description,
       
            }
            )
       
    }
    )
    const data= await res2.json()
    setRefresh(data.status)
}

    return (
        <div className='edit-warper'>
        <div>
            <IconButton onClick={deleteHandller}>
           <DeleteForeverIcon/>
            </IconButton>
        </div>
        <div>
            <IconButton>
          <EditModal
          item={item}
          setRefresh={setRefresh}/>
            </IconButton>
        </div>
        </div>
    )
}
