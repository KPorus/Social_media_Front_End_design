import {
  AccountCircle,
  Article,
  Groups,
  Home,
  ModeNight,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <Link to='/'>
            <ListItem disablePadding components='a'>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary='Homepage' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/'>
            <ListItem disablePadding components='a'>
              <ListItemButton>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary='Pages' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/'>
            <ListItem disablePadding components='a'>
              <ListItemButton>
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>
                <ListItemText primary='Group' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/'>
            <ListItem disablePadding components='a'>
              <ListItemButton>
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary='Friends' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/'>
            <ListItem disablePadding components='a'>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to='/profile'>
            <ListItem disablePadding components='a'>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem disablePadding components='a'>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
