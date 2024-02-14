import React from 'react';
import { AppBar, Toolbar, Button, Container, Grid, Paper, Typography, Chip } from '@mui/material';

import productsData from '../data/data.json';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';

interface Footer {
    whatsapp: number;
    mail: string;
    instagram: string;
    facebook: string;
    copyright: string;
    year: number;
    name: string;
}

function Footer() {

const { footer }: { footer: Footer } = productsData;
  return (
    <AppBar 
        position="static" 
        style={{
            color:"#ffffff", 
            background: '#ffffff', 
            boxShadow: 'rgb(239, 233, 233) 0px -2px 4px -1px',
            borderRadius: '10px',
            padding: '2% 0'
        }}>
        <Toolbar>
            <Grid
                container
                rowGap={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
                >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <img 
                        alt="Logo" 
                        src={'images/2.png'} 
                    />
                </Grid>

                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <Typography 
                            style={{
                                color: "#9A9A9A",
                                fontSize: '20px',
                                padding: "10px"
                            }}>
                        <WhatsAppIcon 
                            style={{
                                color: "#9A9A9A", 
                                fontSize: "20px",
                                verticalAlign: "middle",
                                padding: '0 5px'
                                // fontSize: "20px",
                                // verticalAlign: "middle",
                                // padding: '0',
                                // borderRadius: '50%',
                                // color: 'rgb(255 255 255)',
                                // background: 'green linear-gradient(0deg, #04ff00, #00ff2b)'
                            }}
                        /> 
                        {footer.whatsapp}
                    </Typography>

                    <Typography 
                            style={{
                                color: "#9A9A9A",
                                fontSize: '20px',
                                padding: "10px"
                            }}>
                        <EmailIcon 
                            style={{
                                color: "#9A9A9A", 
                                fontSize: "20px",
                                verticalAlign: "middle",
                                padding: '0 5px'
                        }}/> 
                        {footer.mail}
                    </Typography>

                    <Typography 
                            style={{
                                color: "#9A9A9A",
                                fontSize: '20px',
                                padding: "10px"
                            }}>
                        <InstagramIcon 
                            style={{
                                color: "#9A9A9A", 
                                fontSize: "20px",
                                verticalAlign: "middle",
                                padding: '0 5px'
                        }}/> 

                        {footer.instagram}
                    </Typography>

                    <Typography 
                            style={{
                                color: "#9A9A9A",
                                fontSize: '20px',
                                padding: "10px"
                            }}>
                        <FacebookIcon 
                            style={{
                                color: "#9A9A9A", 
                                fontSize: "20px",
                                verticalAlign: "middle",
                                padding: '0 5px'
                        }}/> 
                        
                        {footer.facebook}
                    </Typography>
                </Grid>

                <Grid 
                 container
                 direction="row"
                 alignItems="center"
                 justifyContent="center"
                 >
                    <Typography 
                        style={{
                            color: "#9A9A9A",
                            fontSize: '16px',
                            padding: "10px"
                        }}>
                            <CopyrightIcon 
                            style={{
                            color: "#9A9A9A", 
                            fontSize: "16px",
                            verticalAlign: "middle"
                        }}/> 
                            {footer.copyright}
                            {footer.year} by {footer.name}
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  );
}

export default Footer;