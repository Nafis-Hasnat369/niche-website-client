import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [services, setServices] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    useEffect(_ => {
        setIsLoading(true)
        fetch(`https://evening-plains-96878.herokuapp.com/allServices`)
            .then(res => res.json())
            .then(data => {
                setServices(data.slice(0, 6))
                setIsLoading(false)
            })
    }, [])

    return (
        <Container >
            <Typography my={5} variant="h3">
                Our services
            </Typography>
            <Grid container spacing={2}>
                {
                    isLoading ? <CircularProgress /> : services?.map(service => <SingleProduct
                        key={service?._id}
                        service={service}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Products;