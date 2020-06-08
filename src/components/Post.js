import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function Post(props) {
  console.log(props);

  const classes = useStyles();

  const [statePost, setstatePost] = useState(props.post);

  let rslt2 = [];
  for (let i = 0; i < statePost.length; i++) {
    let dump = statePost[i].post;
    let rslt = dump.substring(0, 150);
    rslt2.push(rslt);
  }

  let forIndx = 0;

  return (
    <React.Fragment>
      {statePost.length > 0
        ? statePost.map((post) => (
            <Grid item xs={6}>
              {/* <Paper className={classes.paper}>xs=8</Paper> */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
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
            </Grid>
          ))
        : ""}
    </React.Fragment>
  );
}
