import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#A50E00', boxShadow: 'none' }}>
        <Toolbar style={{ backgroundColor: '#A50E00' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', flexGrow: 1 }}>
            धरोहर
          </Typography>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
            <TextField
              label="Search"
              variant="outlined"
              InputProps={{
                style: {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              style={{ marginLeft: '10px' }}
            />
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleLanguageMenuClick}>
              <LanguageIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLanguageMenuClose}
            >
              <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
              <MenuItem onClick={handleLanguageMenuClose}>Hindi</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;