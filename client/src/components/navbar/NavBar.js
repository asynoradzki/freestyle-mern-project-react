import './navbar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

//UWAGA! nienaprawione funkcje przenoszenia do innych stron


const NavBar = ({ disabledButtons, handleClick }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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
              href="/"
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

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
               
              </IconButton>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
              <Button
                key="home"
                onClick={() => handleClick("display")}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 'large' }}
              >
                HOME
              </Button>
              <Button
                key="movies"
                onClick={() => handleClick("display")}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 'large' }}
              >
                MOVIES
              </Button>
              <Button
                key="series"
                onClick={() => handleClick("display")}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 'large' }}
              >
                SERIES
              </Button>
            </Box>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
   
    );
  }


  
  /*  <nav>
      <button onClick={()=> handleClick("display")} disabled={disabledButtons.display}>Display Movies</button>
      <button onClick={()=> handleClick("create")} disabled={disabledButtons.create} >Create New</button>
      <button onClick={()=> handleClick("edit")} disabled={disabledButtons.edit}>Edit</button>
      <button disabled>DarkTheme</button>
      <button onClick={()=> handleClick("login")} disabled={disabledButtons.login}>Login/Sign-in</button>
      
    </nav> */

export default NavBar;


