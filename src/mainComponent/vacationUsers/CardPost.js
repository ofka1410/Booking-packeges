import React from 'react'
import{Typography,Grid,CardMedia,CardContent,
    CardActions,CardActionArea,Card} from '@material-ui/core';
    import { fade, makeStyles } from '@material-ui/core/styles';
    import Unfollow from './Unfollow';
     import './card.css'

    const useStyles = makeStyles({
           media: {
          height: 220,
           },
          });

export default function CardPost({item,setRefresh}) {
    const classes = useStyles();
  
    return (
    <Grid sx={6} className='card-warper'>
     <Card style={{width:"370px",opacity:'0.9'}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.vacation.img}
          title="Contemplative Reptile"
        />
         <CardContent>
           <Typography className='name-item' gutterBottom variant="h4" component="h2">
           {item.vacation.name}
          </Typography>
          <Typography className='description' variant="body2"  component="p">
          {item.vacation.description}
          </Typography>
          <Typography className='price' gutterBottom variant="h5" component="h2">
           {item.vacation.price}
          </Typography>
          </CardContent>
          </CardActionArea>
           <CardActions>
              <Typography
               className='dates' 
                variant="body2"
                  color="textSecondary" 
                      component="p">
                        <span className='date'>
                          {item.vacation.checkIn}
                            </span>
                             until the
                    <span className='date'>
                  {item.vacation.checkOut}
                 </span>
            </Typography>
         </CardActions>
         <div>
          <Unfollow 
           item={item}
           setRefresh={setRefresh}
            />
          </div>
          </Card>
           </Grid>
       
       )
     }
