import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/headers/Header';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import CalcuPict from "../components/pict/calcu.jpg";
import Post from "../components/Post";
import Grid from "@material-ui/core/Grid";

export default function Kalkulus() {
  let data = [
    {
      title: "Do You Know Calculus?",
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
              <Post image={CalcuPict} post={data} />
            
            </Grid>
          </main>
      </Container>
      <Footer title="Hello" description="Something here to give the footer a purpose!" />
    </React.Fragment>
    )
}
