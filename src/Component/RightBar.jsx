import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const RightBar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' width={300}>
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
        <Typography fontWeight='100'>Recent Post</Typography>
        <ImageList cols={3} rowHeight={100} gap={3} sx={{ margin: 1 }}>
          <ImageListItem>
            <img
              src='https://i.ibb.co/2cXfCtP/pexels-fardin-khan-10562250.jpg'
              alt='river'></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://i.ibb.co/2cXfCtP/pexels-fardin-khan-10562250.jpg'
              alt='river'></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://i.ibb.co/2cXfCtP/pexels-fardin-khan-10562250.jpg'
              alt='river'></img>
          </ImageListItem>
        </ImageList>
        <Typography fontWeight='100' marginTop={2}>
          Recent Communication
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'>
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
