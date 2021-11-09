import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password didn't match!");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="name"
                            onBlur={handleOnBlur}
                            label="Your Name"
                            type="text"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Your Email"
                            type="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Your Password"
                            type="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Re-type Your Password"
                            type="password"
                            variant="standard" />
                        <NavLink style={{ textDecoration: "none" }} to="/login">
                            <Button variant="text">Already Registered ? Please Login</Button>
                        </NavLink>
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Sign up</Button>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src="https://i.ibb.co/NyC1Vjh/login.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;