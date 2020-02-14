import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function MediaCard() {
  const classes = useStyles();
  
  const [statePost, setstatePost] = useState({})

  let rslt2 = []
  console.log("ini push",rslt2);
  



  // console.log("dataaaaa",thisPost);
  

 for (let i = 0; i < statePost.length; i++) {
   let dump = statePost[i].post
   let rslt = dump.substring(0, 150)
   rslt2.push(rslt)
   console.log("ini hsil sub",rslt);
   
 }
// let featuredPosts = state.data
console.log("data hasil post",statePost);

useEffect(async () => {
const result = await 
  axios.get(`https://simpleappku.herokuapp.com/fdg`)
.then(res => {
  console.log("ini datanya",res);   
  setstatePost (res.data.data);
      })

}, []);

let forIndx = 0

  return (
    <React.Fragment>
    {statePost.length > 0 ? statePost.map(post => 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {rslt2[forIndx++]}.....        
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
     ) : ""} 
    </React.Fragment>
  );
  
}
