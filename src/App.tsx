import React from 'react';
import { Container, Typography, Card, CardContent, Grid, CardMedia } from '@mui/material';
import Products from 'components/Products';
import Header from 'components/Header';
import Contact from 'components/Contact';


function App() {
  
  return (
    <Container>

      {/* Header  */}
    
      <Header />

      {/* Products */}
    
      <Products />      

      {/* Contact */}

      <Contact />
    
    </Container>

  );
}

export default App;
