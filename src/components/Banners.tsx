import React from 'react';
import { Card, Container, Grid, Typography } from '@mui/material';
import Carousel  from 'react-material-ui-carousel';

import data from '../data/data.json';

interface Banner {
    title: string,
    color: string
}

function Banners() {
    const { banners }: { banners: Banner[] } =  data;
  return (
        <Container
            style={{
            paddingTop: '5%',
            paddingBottom: '5%'
            }}>
            <Carousel animation="slide">
                {banners.map( (banner)=>{
                return (
                    <Card 
                        style={{
                            background: banner.color, 
                            height: 340,
                            boxShadow: "none",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: '16px'
                            }}>
                            <Grid direction="row">
                                <Grid item>
                                    <img 
                                        alt="Logo" 
                                        src={'images/3.png'} 
                                        style={{ 
                                            height: 'auto',
                                            maxWidth: '100%', 
                                            marginRight: 10 ,
                                            alignSelf: "center",

                                    }} />
                                </Grid>
                                <Grid item>
                                    <Typography 
                                        color={"white"} 
                                        fontWeight={"bold"} 
                                        style={{
                                            fontSize: '6rem'
                                        }}
                                        >
                                        {banner.title}
                                    </Typography>
                                </Grid>

                            </Grid>
                    </Card>
                )})}
            </Carousel>
        </Container>
    );
}

export default Banners;