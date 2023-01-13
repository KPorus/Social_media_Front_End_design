import { Avatar, AvatarGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const RightBar = () => {
    return (
      <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position='fixed'>
          <Typography fontWeight='100'>Online Friends</Typography>
          <AvatarGroup max={7}>
            <Avatar
              alt='Jon'
              src='https://i.ibb.co/x5DZRFq/pexels-pixabay-36029.jpg'></Avatar>
            <Avatar
              alt='Jon'
              src='https://i.ibb.co/gvZzwrc/pexels-sparsh-karki-2350074.jpg'></Avatar>
            <Avatar
              alt='Jon'
              src='https://i.ibb.co/Yj7qHyZ/pexels-daniel-xavier-1239291.jpg'></Avatar>
            <Avatar
              alt='Jon'
              src='https://i.ibb.co/GW5pKtG/pexels-justin-shaifer-1222271.jpg'></Avatar>
            <Avatar alt='Jon' src=''></Avatar>
            <Avatar
              alt='Jon'
              src='https://i.ibb.co/LRFxb8z/pexels-andrea-piacquadio-733872.jpg'></Avatar>
            <Avatar alt='Jon' src=''></Avatar>
            <Avatar
              alt='Jon'
              src='https://i.ibb.co/tBJRxD6/243648299-903960517203843-4935319824555498133-n.jpg'></Avatar>
            <Avatar
              alt='Jon'
              src='https://i.ibb.co/3778GLp/oie-2tq-S6-Dmf8k0t.jpg'></Avatar>
          </AvatarGroup>
        </Box>
      </Box>
    );
};

export default RightBar;