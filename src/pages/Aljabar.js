import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/headers/Header";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import AljabarPict from "../components/pict/aljabar.jpg";
import Grid from "@material-ui/core/Grid";
import PostMateri from "../components/PostMateri";
import axios from "axios";
import Markdown from "../components/Markdown";

const api = process.env.REACT_APP_API;

export default function Aljabar() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      let url = api;
      let config = {};
      const response = await axios.get(url);
      console.log(response);
      setData(response.data.data);
    }

    fetchMyAPI();
  }, []);

  // const data = [
  //   {
  //     title: "Aljabar adalah",

  //     description:
  //       'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
  //     image: AljabarPict,
  //   },
  //   {
  //     title: "Aljabar adalah",

  //     description:
  //       'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
  //     image: AljabarPict,
  //   },
  //   {
  //     title: "Aljabar adalah",

  //     description:
  //       'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
  //     image: AljabarPict,
  //   },
  //   {
  //     title: "Aljabar adalah",

  //     description:
  //       'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
  //     image: AljabarPict,
  //   },
  //   {
  //     title: "Aljabar adalah",

  //     description:
  //       'Aljabar (dari bahasa arab " al-jabr " yang berarti " pengumpulan bagian yang rusak") adalah salah satu bagian dari bidang matematika yang luas, bersama-sama dengan teori bilangan,',
  //     image: AljabarPict,
  //   },
  // ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          {data.length > 0 ? (
            <Markdown key={"post.substring(0, 40)"}>{data[2].post}</Markdown>
          ) : (
            ""
          )}
          {/*  */}
          <Grid container spacing={4}>
            <PostMateri post={data} />
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
