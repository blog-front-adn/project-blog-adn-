import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/headers/Header";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import AljabarPict from "../components/pict/aljabar.jpg";
import Post from "../components/Post";
import Grid from "@material-ui/core/Grid";
import PostMateri from "../components/PostMateri";

export default function Aljabar() {
  const data = [
    {
      title: "Aljabar adalah",

      description:
        'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
      image: AljabarPict,
    },
    {
      title: "Aljabar adalah",

      description:
        'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
      image: AljabarPict,
    },
    {
      title: "Aljabar adalah",

      description:
        'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
      image: AljabarPict,
    },
    {
      title: "Aljabar adalah",

      description:
        'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
      image: AljabarPict,
    },
    {
      title: "Aljabar adalah",

      description:
        'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
      image: AljabarPict,
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />

        <main>
          <Grid container spacing={4}>
            {data.map((post) => (
              <PostMateri key={post.title} post={post} />
            ))}
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
