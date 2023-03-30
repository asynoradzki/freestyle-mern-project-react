import { Drawer, Box, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchMenu from '../Searchmenu/SearchMenu'
import {useState} from "react";


function RightDrawer({ allFilms, setFilteredFilms, drawerState }) {
  const { isDrawerOpen, setIsDrawerOpen } = drawerState

  return (
    <div>
      <MenuIcon
        fontSize="large"
        color="neutral"
        edge="start"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
        >
        </MenuIcon>
      <Drawer
        anchor="right"
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '270px',
            boxSizing: 'border-box',
            px: 2,
          },
        }}>
        <Box>
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
          <SearchMenu allFilms={allFilms} setFilteredFilms={setFilteredFilms} />
        </Box>
      </Drawer>
    </div>
  );
}

export default RightDrawer;
