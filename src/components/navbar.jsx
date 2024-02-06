import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
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
                {/* Use Link component to make SLDC clickable */}
                <Link to="/home">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SLDC
                    </Typography>
                </Link>
                <Button
                    color="inherit"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{ marginLeft: 5 }}
                >
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >

                    <MenuItem onClick={handleClose}>
                        <Link to="/create-user">
                            Create User
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/reset-password">
                            Reset Password
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/delete-user">
                            Delete User
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/update-user-password">
                            Update User Password
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <Link to="/update-user-role">
                            Update User Role
                        </Link>
                    </MenuItem>

                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
