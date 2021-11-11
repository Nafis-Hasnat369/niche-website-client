import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ service }) => {
    const { name, img, price, description, _id } = service;
    return (
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card >
                <CardMedia
                    component="img"
                    alt={name}
                    height="500"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Price: $ {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                    <Link style={{ textDecoration: "none" }} to={`/booking/${_id}`}><Button variant="contained" size="small">Buy now</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleProduct;