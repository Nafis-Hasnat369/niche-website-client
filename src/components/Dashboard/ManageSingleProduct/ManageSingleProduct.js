import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';


const ManegeSingleProduct = ({ service, setDeleteCount }) => {
    const { name, img, price, description, _id } = service;
    const handleDelete = id => {
        // eslint-disable-next-line no-restricted-globals
        const popup = confirm("Are you sure you want to delete this product")
        if (popup) {
            fetch(`https://evening-plains-96878.herokuapp.com/deleteService/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result?.deletedCount) {
                        setDeleteCount(result.deletedCount)
                    }
                })
        }
    };
    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card >
                <CardMedia
                    component="img"
                    alt={name}
                    height={250}
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
                    <Button onClick={_ => handleDelete(_id)} variant="contained">Delete</Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default ManegeSingleProduct;