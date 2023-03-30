import './navbar.css';
import * as React from 'react';
import { Button, Avatar, Tooltip, Menu, MenuItem, AppBar, Box, Toolbar, IconButton, Typography, Container } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, Link } from "react-router-dom";
import { useContext, useState } from 'react'
import UserContext from '../../authHelpers/UserContext'
import { getToken } from '../../environments';

const logoutUser = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

const NavBar = () => {
  const { loggedUser } = useContext(UserContext);
  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUser = () => {
    setAnchorElUser(null);
    localStorage.removeItem('token');
    window.location.reload();
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            className='logo'
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MOVIEWEB
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Button
                key="home"
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 'large' }}
              >
                HOME
              </Button>
            </Link>
            <Link to='/movies'>
              <Button
                key="movies"
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 'large' }}
              >
                MOVIES
              </Button>
            </Link>
          </Box>
          {getToken() ?
            (<>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key='watchlist' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Watchlist</Typography>
                </MenuItem>
                <MenuItem key='logout' onClick={logoutUser}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </>) : (<Link to='/login'>
              <Button
                key="login"
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 'large' }}

              >
                LOG IN/ SIGN IN
              </Button>
            </Link>)
          }
          <Typography>{loggedUser ? loggedUser.username : ""}</Typography>
        </Toolbar>
      </Container>
      <Outlet />
    </AppBar>
    // <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  );
}

export default NavBar;


