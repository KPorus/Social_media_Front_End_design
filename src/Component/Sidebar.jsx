import { AccountCircle, Home } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Sidebar = () => {
    return (
      <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <List>
          <ListItem disablePadding components='a' href='#home'>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Homepage' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding components='a' herf='#profile'>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
};

export default Sidebar;