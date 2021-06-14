import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button,CardMedia,CardContent,CardActions,CardActionArea,Card} from '@material-ui/core';
import AddingFunctional from './AddingFunctional'
import '../addingVac.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    minWidth:250
  },
  media: {
    height: 160,
  },
});

export default function MediaCard({setRefresh}) {
  const classes = useStyles();
const[description,setDescription]=useState('')
const[price,setPrice]=useState('')
const[img,setImg]=useState('')
const[name,setName]=useState('')
const[checkIn,setCheckIn]=useState('')
const[checkOut,setCheckOut]=useState('')

const uploadImage= async(e)=>{
    const files =e.target.files
    console.log(files)
    const data = new FormData()
    data.append('file',files[0])
    data.append('upload_preset',"vacaition")
    const res = await fetch('https://api.cloudinary.com/v1_1/df2pklfox/image/upload',
{
method:'POST',
body:data
})
const file= await res.json()
console.log(file)
setImg(file.secure_url)
  }
  return (
    <Card  className={classes.root}>
      <CardActionArea className='add-modal'>
          <div>
   <TextField onChange={uploadImage} type='file'>
    </TextField>
   </div>
  <div>
  <CardMedia
    className={classes.media}
     image={img}
      title="Contemplative Reptile"
    />
    </div>
        <CardContent>
        <div>
          <TextField 
          type='text'
           onChange={(e)=>{setDescription(e.target.value)}} 
          variant="outlined" color="textSecondary" 
          component="p"
          placeholder='vacaition description'
          className='descreption'>
          </TextField>
          </div>
          <div>
          <TextField 
          type='text'
           onChange={(e)=>{setName(e.target.value)}} 
          variant="outlined" color="textSecondary" 
          component="p"
          placeholder='country name:'
          className='descreption'>
          </TextField>
          </div>
            <div>
          <TextField 
           onChange={(e)=>{setPrice(e.target.value)}} 
          type='text'
          className='price'
          variant="outlined" 
          placeholder='price $:'>
          </TextField>
          </div>
      
          <div className='date-warper'>
              <div className='date-div'>
              <label>CheckIn:</label>
          <TextField 
          type='date'
           onChange={(e)=>{setCheckIn(e.target.value)}} 
          variant="outlined" color="textSecondary" 
          component="p">
          </TextField>
          </div>
          <div className='date-div'>
              <label>CheckOut:</label>
          <TextField 
          type='date'
           onChange={(e)=>{setCheckOut(e.target.value)}} 
          variant="outlined" color="textSecondary" 
          component="p">
          </TextField>
          </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <AddingFunctional
       description={description}
       price={price}
       img={img}
       name={name}
       checkIn={checkIn}
       checkOut={checkOut}
       setRefresh={setRefresh}
       />
       
      </CardActions>
    </Card>
  );
}