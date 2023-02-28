import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { StyledToolbar } from './Header.Styled';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menu = (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Home" />
          <HomeOutlinedIcon sx={{ marginLeft: '20px' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/weather">
          <ListItemText primary="Weather" />
          <WbSunnyOutlinedIcon sx={{ marginLeft: '40px' }} />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Container>
          <StyledToolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather App
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                Log In
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </StyledToolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        {menu}
      </Drawer>
    </>
  );
};
