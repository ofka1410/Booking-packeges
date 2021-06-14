import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button,CardMedia,CardContent,CardActions,CardActionArea,Card} from '@material-ui/core';
import '../addingVac.css'
import EditFunctional from './EditFunctional'
const useStyles = makeStyles({
    root: {
      maxWidth: 445,
      minWidth:250
    },
    media: {
      height: 200,
    },
  });

export default function EditCard({item,setRefresh}) {
const[description,setDescription]=useState(item.description)
const[price,setPrice]=useState(item.price)
const[img,setImg]=useState(item.img)
const[checkIn,setCheckIn]=useState(item.checkIn)
const[checkOut,setCheckOut]=useState(item.checkOut)
const classes = useStyles();

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
        <Card className='add-modal'   className={classes.root}>
        <CardActionArea>
            <div>
  <TextField  onChange={uploadImage} type='file'>
  
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
             value={description}
            className='descreption'>
            </TextField>
            </div>
              <div>
            <TextField 
             onChange={(e)=>{setPrice(e.target.value)}} 
            type='text'
            className='price'
            variant="outlined" 
            value={price}>
            </TextField>
            </div>
        
            <div className='date-warper'>
                <div className='date-div'>
                <label>CheckIn:</label>
            <TextField 
            type='date'
            value={checkIn}
             onChange={(e)=>{setCheckIn(e.target.value)}} 
            variant="outlined" color="textSecondary" 
            component="p">
            </TextField>
            </div>
            <div className='date-div'>
                <label>CheckOut:</label>
            <TextField 
            type='date'
           value={checkOut}
             onChange={(e)=>{setCheckOut(e.target.value)}} 
            variant="outlined" color="textSecondary" 
            component="p">
            </TextField>
            </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <EditFunctional
        item={item}
        description={description}
        price={price}
        img={img}
        checkIn={checkIn}
        checkOut={checkOut}
        setRefresh={setRefresh}/>
        </CardActions>
      </Card>
    )
}
