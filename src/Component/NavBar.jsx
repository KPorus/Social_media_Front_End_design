import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NavBar = () => {
    const StyleTool = styled(Toolbar)(
        {
            display:'flex',
            justifyContent:"space-between",
        }
    )
    return (
      <AppBar position='sticky'>
        <StyleTool>NavBar</StyleTool>
      </AppBar>
    );
};

export default NavBar;