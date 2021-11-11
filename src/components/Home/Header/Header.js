import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: "#fff",
            textDecoration: "none"
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: "none !important"
            },
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: "none"
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: "right"
            },
        },
        mobileNavItem: {
            textDecoration: "none",
            color: "#000"
        }
    })
    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();
    const [state, setState] = React.useState(false);
    const activeStyle = { color: "orange" }
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
                            className={navIcon}
                            onClick={_ => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={navLogo} component="div" sx={{ flexGrow: 1 }}>
                            Super Cars
                        </Typography>
                        <Box className={navItemContainer}>
                            <NavLink activeStyle={activeStyle} className={navItem} to="/home"><Button color="inherit">Home</Button></NavLink>
                            <NavLink activeStyle={activeStyle} className={navItem} to="/explore"><Button color="inherit">Explore</Button></NavLink>
                            {
                                user?.email ?
                                    <><NavLink activeStyle={activeStyle} style={{ textDecoration: "none", color: "white" }} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                                        <span style={{ color: "cyan" }}>{user?.displayName}</span>
                                        <Button onClick={logout} style={{ color: "lime" }} color="inherit"><LogoutIcon style={{ marginRight: "5", color: "lime" }} />Logout</Button></>

                                    : <NavLink activeStyle={activeStyle} style={{ textDecoration: "none", color: "lime" }} to="/login"><Button sx={{ color: "lime" }}><LoginIcon style={{ marginRight: "5", color: "lime" }} />Login</Button></NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={_ => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button >
                                    <ListItemText >
                                        <Link className={mobileNavItem} to="/">Home</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button >
                                    <ListItemText >
                                        <Link className={mobileNavItem} to="/explore">Explore</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button >
                                    <ListItemText >
                                        <Link className={mobileNavItem} to="/dashboard">Dashboard</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button >
                                    <ListItemText >Signed in as: <span style={{ color: "red" }}>{user?.displayName}</span></ListItemText>
                                </ListItem>
                                <Divider />
                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>

            </div>
        </div>
    );
};

export default Header;