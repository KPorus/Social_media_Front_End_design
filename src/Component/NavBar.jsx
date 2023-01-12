import styled from '@emotion/styled';
import { BugReport } from '@mui/icons-material';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material';
import React from 'react';

const NavBar = () => {
    const StyleTool = styled(Toolbar)(
        {
            display:'flex',
            justifyContent:"space-between",
        }
    )

    const SearchBar = styled("div")({
      backgroundColor:"white",
      padding:"2px, 10px",
      borderRadius:"0.5rem",
      width:"40%"
    })

    const IconBox = styled(Box)({
      backgroundColor:"white",
      padding:"10px, 10px",      
    })
    return (
      <AppBar position='sticky'>
        <StyleTool>
          <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
            Bug Block
          </Typography>
          <BugReport sx={{display:{xs:"block", sm:"none"}}}></BugReport>
          <SearchBar><InputBase placeholder='Search...'/></SearchBar>
          <IconBox>Icon</IconBox>
        </StyleTool>
      </AppBar>
    );
};

export default NavBar;