import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/headers/Header";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import Grid from "@material-ui/core/Grid";
import Post from "../components/Post";
import TrigonoPict from "../components/pict/statistika.jpg";

export default function StatistikaAndPeluang() {
  let data = [
    {
      title: "materi about statistika",
      post:
        "my post data Cum sociis natoque penatibus et magnis dis parturient mo",
    },
    {
      title: "materi about peluang",
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
          <Grid container spacing={3}>
            <Post image={TrigonoPict} post={data} />
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
