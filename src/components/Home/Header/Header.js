import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Super Cars
                        </Typography>
                        {
                            user?.email ? <Box>
                                <NavLink style={{ textDecoration: "none", color: "white" }} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                                <span style={{ color: "cyan", margin: 10 }}>{user?.displayName}</span>
                                <Button onClick={logout} style={{ color: "" }} color="inherit"><LogoutIcon style={{ color: "lime" }} /></Button>
                            </Box>
                                : <NavLink style={{ textDecoration: "none", color: "lime" }} to="/login"><Button color="inherit">Login</Button></NavLink>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;