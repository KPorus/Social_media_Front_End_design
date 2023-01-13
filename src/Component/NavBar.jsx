import { useState } from "react";
import styled from "@emotion/styled";
import { BugReport, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";


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

const IconBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "1rem",
}));

const UserIcon = styled(Box)({
  display: "flex",
  alignContent: "center",
  gap: "1rem",
});

const NavBar = () => {
  const [open, setopen] = useState(false);
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
        <IconBox sx={{ display: { sm: "flex" } }}>
          <Badge
            badgeContent={8}
            color='error'
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Mail></Mail>
          </Badge>
          <Badge
            badgeContent={2}
            color='error'
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            onClick={(e) => setopen(true)}
            src='https://i.ibb.co/4F1tyPq/170517-Jennie-Kim-Blackpink-04.jpg'></Avatar>
        </IconBox>
        <UserIcon
          sx={{ display: { sm: "none" } }}
          onClick={(e) => setopen(true)}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src='https://i.ibb.co/4F1tyPq/170517-Jennie-Kim-Blackpink-04.jpg'></Avatar>
          <Typography variant='span'>Fardin</Typography>
        </UserIcon>
      </StyleTool>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
