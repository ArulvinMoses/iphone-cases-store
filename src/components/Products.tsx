import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import productsData from '../data/data.json';

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
}

const Products = () => {
    const { products }: { products: Product[] } = productsData;

return (
        <Grid container spacing={6} columns={12}>
        {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={4}> 
                <Card key={product.id} style={{ marginBottom: '20px', boxShadow: 'gray' }} >
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography variant="body2">{product.description}</Typography>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
    )
}

export default Products;  