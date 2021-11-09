import { CircularProgress } from '@material-ui/core';
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginUser, googleSignIn, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = _ => {
        googleSignIn(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    {!isLoading && <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="email"
                            onBlur={handleOnChange}
                            label="Your Email"
                            type="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password"
                            onBlur={handleOnChange}
                            label="Your Password"
                            type="password"
                            variant="standard" />
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User ? Please Register</Button>
                        </NavLink>
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Login</Button>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>}
                    <p>---------------------</p>
                    <Button onClick={handleGoogleSignIn} sx={{ width: "75%", m: 1 }} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src="https://i.ibb.co/NyC1Vjh/login.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;