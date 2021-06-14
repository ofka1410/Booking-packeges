import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{Typography,Grid,CardMedia,CardContent,
    CardActions,CardActionArea,Card} from '@material-ui/core';
   import EditIcons from '../edit_vacation/EditIcons'
    const useStyles = makeStyles({
     root: {
     maxWidth: 345,
     },
    media: {
    height: 140,
    },
      });

export default function VacationCard({item,setRefresh}) {
  const classes = useStyles();
  const [hover,setHover]=useState(false)
  const [opacity,setOpacity]=useState('1')

const likeHoverover =()=>{
    setHover(true)
    setOpacity('0.8')
}
const notHover =()=>{
    setHover(false)
    setOpacity('1')

}



  return (
      <Grid style={{minWidth:"350px",margin:'10px'}} onMouseLeave={notHover}
        onMouseEnter={() =>likeHoverover()}
       xs={3}>
    <Card className={classes.root}>
      <CardActionArea>
          {hover==true?
          (<EditIcons 
          item={item}
          setRefresh={setRefresh}/>)
          :<></>}
        <CardMedia
        style={{opacity:opacity}} 
          className={classes.media}
          image={item.img}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
           {item.name}
          </Typography>
          <Typography variant="body2"  component="p">
          {item.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
           {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography variant="body2" color="textSecondary" component="p">
          {item.checkIn} until the {item.checkOut}
          </Typography>
      </CardActions>
    </Card>
    </Grid>
  );
}