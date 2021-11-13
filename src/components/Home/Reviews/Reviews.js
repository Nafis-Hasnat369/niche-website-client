import { Card, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(_ => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, []);
    return (
        <Container sx={{ my: 20 }}>
            <h2>Reviewed items</h2>
            <Grid container spacing={2}>
                {
                    reviews?.map(pd =>
                        <Grid key={pd?._id} item xs={12} sm={12} md={6} lg={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={pd?.name}
                                    height={300}
                                    image={pd?.img} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {pd?.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Rating name="half-rating-read" defaultValue={pd?.ratting} precision={0.5} readOnly />
                                    </Typography>
                                    <Typography gutterBottom variant="body1" component="div">
                                        <span style={{ color: "red" }}>Review:</span> {pd?.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    );
};

export default Reviews;