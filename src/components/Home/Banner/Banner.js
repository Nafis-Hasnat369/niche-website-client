import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Banner = () => {
    const background = {
        background: `url("https://i.ibb.co/m4z7qLw/car-banner-2.jpg")`,
        backgroundColor: 'rgba(45, 58, 74, .6)',
        backgroundBlendMode: 'darken, luminosity',
        color: "#fff",
        marginBottom: 100
    };
    return (
        <Box style={background} >
            <Typography variant="h3" sx={{ fontWeight: 500, color: "cyan" }} >
                Welcome to Super Cars
            </Typography>
            <Grid container my={5} spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="h3" sx={{ fontWeight: 400, color: "chocolate" }} >
                        Choose Your favorite <br /> car here...
                    </Typography>
                    <Typography variant="h5" mt={15} ml={10} sx={{ fontWeight: 400, color: "cyan", textAlign: "left" }} >
                        We'll help to find your best car <br />
                        at a fair price...
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img width="100%" src="https://i.ibb.co/VpJtg3S/car-banner-1.jpg" alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;