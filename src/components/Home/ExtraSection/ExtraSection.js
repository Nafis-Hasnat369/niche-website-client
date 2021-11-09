import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ExtraSection = () => {
    const totalBackground = {
        background: `url("https://i.ibb.co/m4z7qLw/car-banner-2.jpg")`,
        backgroundColor: 'rgba(45, 58, 74, .8)',
        backgroundBlendMode: 'darken, luminosity',
        color: "#fff",
        marginTop: "200"
    };
    return (
        <Box style={totalBackground} >
            <Typography variant="h3" sx={{ fontWeight: 500, color: "cyan" }} >
                Super Car Family
            </Typography>
            <Grid container my={5} spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img width="100%" src="https://i.ibb.co/L84wS8B/car-banner-3.jpg" alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="h3" my={2} p={1} sx={{ fontWeight: 400, color: "chocolate" }} >
                        Join Our Super Car Community <br /> to explore here...
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 300, color: "cyan" }} >
                        Our Community help  <br />
                        you to grow more..
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExtraSection;