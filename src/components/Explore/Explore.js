import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import ExploreSingle from './ExploreSingle'

const Explore = () => {
    const [services, setServices] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    useEffect(_ => {
        setIsLoading(true)
        fetch(`http://localhost:5000/allServices`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false)
            })
    }, []);

    return (
        <><Container>
            <Typography my={5} color="chocolate" variant="h3">
                Explore our all services
            </Typography>
            <Grid container spacing={2}>
                {isLoading ? <CircularProgress /> : services?.map(service => <ExploreSingle
                    key={service?._id}
                    service={service} />)}
            </Grid>
        </Container><Footer /></>
    );
};

export default Explore;