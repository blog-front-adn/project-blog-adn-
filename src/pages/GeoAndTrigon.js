import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/headers/Header';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';

export default function GeoAndTrigon() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          
          <main>
          <div>
            <h1>INI PAGE Geometri dan Trigonometri</h1>
        </div>
          </main>
      </Container>
      <Footer title="Hello" description="Something here to give the footer a purpose!" />
    </React.Fragment>
       
    )
}
