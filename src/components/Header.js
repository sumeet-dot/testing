import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#A50E00 ' }}>
        <Toolbar>
          <Typography variant="h6" style={{ fontWeight: 'bold'}}>
            धरोहर
          </Typography>
        </Toolbar>
      </AppBar>
      
    </>
  );
};

export default Header;