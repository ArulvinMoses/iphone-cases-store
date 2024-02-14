import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from "@mui/material"

import AppleIcon from '@mui/icons-material/Apple';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import productsData from '../data/data.json';
import { CURRENCYSYMBOL } from 'utils/constant';
import ProductDetails from './ProductDetails';


import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    discountPrice: number;
    actualPrice: number;
}

const Products = () => {

    const { products }: { products: Product[] } = productsData;

    const [open, setOpen] = useState(false);
    const [productDetials, setProductDetails] = useState({})
    const handleOpen = (product:any) => {
        console.log(product)
        setProductDetails(product)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    return (
    <Container 
    style={{
        paddingTop: '5%',
        paddingBottom: '5%'
    }}>

        <Grid container spacing={6} columns={12}>
        {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={4}> 
                <Card key={product.id} 
                style={{   
                    background:"#F6F6F6",
                    borderRadius: "10px",
                    boxShadow:  "rgba(0, 0, 0, 0.2) 0px 0.1px 0.1px",
                 }} 
                 onClick={() => handleOpen(product)}>
                    <Container style={{padding: 0,paddingLeft: '5%', paddingTop: '5%'}}>
                        <Chip 
                            label="IN STOCK"
                            style= {{
                                color: "#FFFFFF",
                                background: "#2AC270",
                                border: "#F0F0F0"
                            }} 
                            icon={<FiberManualRecordIcon 
                            style={{
                                color: "#FFFFFF", 
                                fontSize: "10px",
                            }}
                            />} 
                        />
                    </Container>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                    />
                    <CardContent>
                        <Typography 
                            style={{
                                color: "#9A9A9A",
                                fontSize: '20px',
                                padding: "10px"
                            }}>
                            {product.name}
                        </Typography>

                        <Chip 
                            icon={<AppleIcon 
                            style={{
                                color: "#9A9A9A", 
                                fontSize: "14px"
                            }}/>} 
                            label="Iphone"
                            style= {{
                                color: "#9A9A9A",
                                background: '#FFFFFF',
                                border: "#F0F0F0",
                                fontSize: "14px",
                                padding: "10px"
                            }} 
                        />
                    <Grid 
                        container 
                        spacing={2} 
                        style={{ 
                            alignItems: "baseline",
                            padding: "10px"
                        }}>
                        <Grid item xs={4}>
                            <Typography 
                            style={{
                                color: "#4C4C4C",
                                fontSize: "24px"
                            }}>
                                {CURRENCYSYMBOL}{product.discountPrice}
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={4}>
                            <Typography style={{
                                color: "#C5C3C3",
                                fontSize: "16px",
                                textDecoration: " line-through"
                            }}>
                                {CURRENCYSYMBOL}{product.actualPrice}
                            </Typography>
                        </Grid>
                    
                    </Grid>
                    
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>

        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Details
            </DialogTitle>
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>
            <DialogContent>
                <ProductDetails data={productDetials}/>
            </DialogContent>
        </Dialog>

        </Container>
    )
}

export default Products;  