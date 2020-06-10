import React from "react";
import "./style/Resolution.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { Link, withRouter, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    display: "flex",
    maxHeight: "250px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 420,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  const location = useLocation();
  console.log(location);

  // fungsi Potong panjang text sebnayak

  let dump = props.post.description;
  let rslt = dump.substring(0, 75);

  // akhir fungsi

  return (
    <Grid item xs={12}>
      <Link to="/tesrtsr">
        <CardActionArea component="div">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h4" variant="h6">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {rslt}....
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden only>
              <CardMedia
                id="dataa"
                className={classes.cardMedia}
                image={post.image}
                title={post.imageText}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
