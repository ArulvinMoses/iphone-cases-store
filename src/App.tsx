import React from 'react';
import { Container } from '@mui/material';
import Products from 'components/Products';
import Header from 'components/Header';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Banners from 'components/Banners';
import Filters from 'components/Filters';


function App() {
  
  return (
    <>
      <Header />
      <Banners />
      <Filters />
      <Products />      
      {/* <Contact /> */}
      
      <Footer/>
    </>
  );
}

export default App;
