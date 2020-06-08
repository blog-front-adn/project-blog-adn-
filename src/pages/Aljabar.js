import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/headers/Header";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import AljabarPict from "../components/pict/aljabar.jpg";
import Post from "../components/Post";
import Grid from "@material-ui/core/Grid";

export default function Aljabar() {
  let data = [
    {
      title: "materi about aljabar",
      post:
        "my post data Cum sociis natoque penatibus et magnis dis parturient mo",
    },
    {
      title: "what is X and Y ?",
      post:
        "my post data Cum sociis natoque penatibus et magnis dis parturient mo",
    },
    {
      title: "my third post",
      post:
        "my post data Cum sociis natoque penatibus et magnis dis parturient mo",
    },
    {
      title: "my four post",
      post:
        "my post data Cum sociis natoque penatibus et magnis dis parturient mo",
    },
    {
      title: "my five post",
      post:
        "my post data Cum sociis natoque penatibus et magnis dis parturient mo",
    },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />

        <main>
          <Grid container spacing={2}>
            <Post image={AljabarPict} post={data} />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Hello"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
