import { Button, Card, CardMedia, Chip, Container, Grid, Typography } from "@mui/material"
import { CURRENCYSYMBOL } from "utils/constant"

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AppleIcon from '@mui/icons-material/Apple';


function ProductDetails (props:any){
    return (
        <Grid container 
        style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <CardMedia
                component="img"
                image={props.data.image}
                alt={props.data.name}
                style={{
                    height: '400px',
                    width: '200px'
                }}
            />
            <Container>
                <Card style={{
                    background:'#F9F9F9',
                    padding:"20px",
                    boxShadow: 'none'
                }}>
                <Grid container direction="row">
                    <Grid 
                    item 
                    sm={12}
                    md={6}
                    >
                        <Grid item>
                            <Typography 
                                style={{
                                    color: "#8E8E8E",
                                    fontSize: '32px'
                                }}>
                                {props.data.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography 
                            style={{
                                color: "#B0B0B0",
                                fontSize: "24px"
                            }}>
                                IPhone Model
                            </Typography>
                        </Grid>
                        <Grid 
                        container
                        direction="row"
                        alignItems="center"
                        >
                            <Grid item xs={6} sm={12}>
                                <Typography
                                 style={{
                                    color: "#000000",
                                    fontSize: "32px"
                                }}>
                                    {CURRENCYSYMBOL}{props.data.actualPrice}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={12}>
                                <Typography 
                                style={{
                                    color: "#C5C3C3",
                                    fontSize: "24px",
                                    textDecoration: "line-through"
                                }}>
                                    {CURRENCYSYMBOL}{props.data.discountPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid 
                    item
                    container 
                    sm={12}
                    md={6} 
                    direction="row" 
                    rowGap={1} 
                    alignItems="center">
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12} sm={6} md={6}>
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
                                        border: "1px solid #F0F0F0",
                                        fontSize: "14px",
                                        padding: "10px"
                                    }} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
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
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography 
                            style={{
                                color: "#9A9A9A",
                                fontSize: '16px'
                            }}>
                                Get it with best price
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <Button 
                            variant="contained" 
                            style={{background: '#262626', borderRadius: '20px', boxShadow: 'none'}}
                            startIcon={
                                <WhatsAppIcon 
                                style={{
                                    color: 'rgb(255 255 255)', 
                                    background: "#1de11d",
                                    borderRadius: '50%'
                                }}/>
                            }>
                            Enquire    
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
                </Card>
            </Container>
        </Grid>
    )
}

export default ProductDetails