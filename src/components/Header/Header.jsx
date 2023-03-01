import {
  AppBar,
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
          <HomeOutlinedIcon sx={{ marginRight: '40px' }} />
          <ListItemText primary="Home" sx={{ marginRight: '40px' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/weather">
          <WbSunnyOutlinedIcon sx={{ marginRight: '40px' }} />
          <ListItemText primary="Weather" sx={{ marginRight: '40px' }} />
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
          </StyledToolbar>
        </Container>
      </AppBar>
      <Drawer anchor="top" open={isMenuOpen} onClose={toggleMenu}>
        {menu}
      </Drawer>
    </>
  );
};
