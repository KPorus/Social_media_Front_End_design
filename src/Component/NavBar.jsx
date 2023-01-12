import styled from '@emotion/styled';
import { BugReport } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';
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
        <StyleTool>
          <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
            Bug Block
          </Typography>
          <BugReport sx={{display:{xs:"block", sm:"none"}}}></BugReport>
        </StyleTool>
      </AppBar>
    );
};

export default NavBar;