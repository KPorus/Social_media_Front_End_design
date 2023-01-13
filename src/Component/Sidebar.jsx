import { AccountCircle, Home } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <List>
          <Link to="/">
            <ListItem disablePadding components='a'>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary='Homepage' />
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
        </List>
      </Box>
    );
};

export default Sidebar;