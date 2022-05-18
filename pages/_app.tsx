import '../styles/globals.css'
import Navbar from '../components/Navbar';
import React from 'react';

function Nextfire({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default Nextfire
