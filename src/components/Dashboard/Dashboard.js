import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import LogoutIcon from '@mui/icons-material/Logout';
import MyOrders from '../Orders/MyOrders/MyOrders';
import AddProduct from '../AddProduct/AddProduct';
const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    const handleLogout = _ => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you wanna logout!");
        if (result) {
            logout();
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const navStyle = { textDecoration: "none", color: "black", display: "block", padding: 4 };
    const drawer = (
        <div>
            <Toolbar />
            <List>
                <>
                    <NavLink style={navStyle} to="/"><Button color="inherit">Home</Button></NavLink>
                    <Divider />
                    <NavLink style={navStyle} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></NavLink>
                    <Divider />
                    <NavLink style={navStyle} to={`${url}/pay`}><Button color="inherit">Pay</Button></NavLink>
                    <Divider />
                    <NavLink style={navStyle} to={`${url}/review`}><Button color="inherit">Review</Button></NavLink>
                    <Button onClick={handleLogout} style={{ color: "orangered" }} variant="text" >Logout <LogoutIcon sx={{ color: "orangered" }} /></Button>
                </>
                <Divider />
                {
                    admin && <>
                        <NavLink style={navStyle} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></NavLink>
                        <NavLink style={navStyle} to={`${url}/addProduct`}><Button color="inherit">Add Service</Button></NavLink>
                        <NavLink style={navStyle} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></NavLink>
                        <NavLink style={navStyle} to={`${url}/allOrders`}><Button color="inherit">Manage All Orders</Button></NavLink>
                        <Button onClick={handleLogout} style={{ color: "orangered" }} variant="text" >Logout <LogoutIcon sx={{ color: "orangered" }} /></Button></>
                }
            </List>
            <Divider />
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/pay`}>

                    </Route>
                    <Route path={`${path}/review`}>

                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>

                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>

                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
