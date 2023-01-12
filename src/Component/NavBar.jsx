import styled from "@emotion/styled";
import { BugReport, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const NavBar = () => {
  const StyleTool = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBar = styled("div")({
    backgroundColor: "white",
    padding: "0, 10px",
    borderRadius: "0.5rem",
    width: "40%",
  });

  const IconBox = styled(Box)({
    display:"flex",
    alignItems:"center",
  });
  return (
    <AppBar position='sticky'>
      <StyleTool>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Bug Block
        </Typography>
        <BugReport sx={{ display: { xs: "block", sm: "none" } }}></BugReport>
        <SearchBar>
          <InputBase placeholder='Search...' />
        </SearchBar>
        <IconBox>
          <Badge badgeContent={8} color='error' sx={{ marginRight: 2 }}>
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications></Notifications>
          </Badge>
          <Avatar sx={{width:"30px", height: "30px", marginLeft:"1rem"}} src='https://i.ibb.co/4F1tyPq/170517-Jennie-Kim-Blackpink-04.jpg'></Avatar>
        </IconBox>
      </StyleTool>
    </AppBar>
  );
};

export default NavBar;
