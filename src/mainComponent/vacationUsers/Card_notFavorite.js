import React from 'react'
import{Typography,Grid,CardMedia,CardContent,
    CardActions,CardActionArea,Card} from '@material-ui/core';
    import './card.css'
    import Follow from  './Follow'
    import {makeStyles} from '@material-ui/core/styles';

    const useStyles = makeStyles({
        media: {
          height: 220,
          },
        bt:{
          hover:{
            color:"white",
            backGround:"rgb(48, 87, 172) "
          }
        }
         });

export default function Card_notFavorite({item,setRefresh}) {
    
  const classes = useStyles();
   
  return (
        <Grid sx={6}  className='card-warper'>
          <Card style={{width:"370px"}} className={classes.root}>
           <CardActionArea>
             <CardMedia
           className={classes.media}
           image={item.img}
           title="Contemplative Reptile"
         />
          <CardContent>
          <Typography className='name-item'  gutterBottom variant="h4" component="h2">
            {item.name}
          </Typography>
      
          <Typography className='description' variant="body2"  component="p">
           {item.description}
       </Typography>
        <Typography className='price' gutterBottom variant="h5" component="h2">
        {item.price}
       </Typography>
         </CardContent>
         </CardActionArea>
          <CardActions>
          <Typography  
           variant="body2"
            color="textSecondary"
           component="p"
           className='dates' >
           <span className='date'>
            {item.checkIn}
            </span> 
          until the 
            <span className='date'>
              {item.checkOut}
             </span>
             </Typography>
              </CardActions>
               <div>
               <Follow 
                item={item}
                 setRefresh={setRefresh}/>
                  </div>
                   </Card>
                     </Grid>
     
             )
              }
