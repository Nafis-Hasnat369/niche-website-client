import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageSingleProducts from '../ManageSingleProduct/ManageSingleProduct'


const Products = () => {
    const [services, setServices] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [deleteCount, setDeleteCount] = useState(0);
    useEffect(_ => {
        setIsLoading(true)
        fetch(`http://localhost:5000/allServices`)
            .then(res => res.json())
            .then(data => {
                setServices(data.slice(0, 6))
                setIsLoading(false)
            })
    }, [deleteCount])

    return (
        <Container >
            <Typography mb={5} variant="h3">
                Manage All Products
            </Typography>
            <Grid container spacing={2}>
                {
                    isLoading ? <CircularProgress /> : services?.map(service => <ManageSingleProducts
                        key={service?._id}
                        service={service}
                        setDeleteCount={setDeleteCount}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Products;