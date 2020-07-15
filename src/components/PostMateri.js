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
import TransitionsModal from "./TransitionsModal";

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
  console.log(post, "this post");

  return (
    <React.Fragment>
      {post.length > 0
        ? post.map((post, index) => (
            <Grid item xs={12} key={index}>
              {/* <Link to="/tesrtsr"> */}
              <CardActionArea component="div">
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h4" variant="h6">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.thumbailPost}....
                      </Typography>
                      {/* <Markdown key={post._id}>{post.post}</Markdown> */}
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                        <TransitionsModal
                          data={{ post: post.post, key: post._id }}
                        />
                      </Typography>
                    </CardContent>
                  </div>
                  {/* <Hidden only>
                      <CardMedia
                        id="dataa"
                        className={classes.cardMedia}
                        image={post.image}
                        title={post.imageText}
                      />
                    </Hidden> */}
                </Card>
              </CardActionArea>
              {/* </Link> */}
            </Grid>
          ))
        : ""}
    </React.Fragment>
  );
}
