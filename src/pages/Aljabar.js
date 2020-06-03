import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/headers/Header';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';

export default function Aljabar() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          
          <main>
          <div>
          <h1>INI PAGE ALJABAR</h1>
        </div>
          </main>
      </Container>
      <Footer title="Hello" description="Something here to give the footer a purpose!" />
    </React.Fragment>
    )
}
