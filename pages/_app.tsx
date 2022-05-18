import '../styles/globals.css'
import Navbar from '../components/Navbar';
import React from 'react';
import { Toaster } from 'react-hot-toast';

function Nextfire({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </React.Fragment>
  );
}

export default Nextfire
