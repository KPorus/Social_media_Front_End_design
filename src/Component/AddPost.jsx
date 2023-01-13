import { useState } from 'react';
import { Add } from '@mui/icons-material';
import { Avatar, Box, Fab, IconButton, Modal, styled, Tooltip, Typography } from '@mui/material';
import React from 'react';

const User = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"20px",
    marginBottom:"1.2rem"
})

const AddPost = () => {
    const [open, setopen] = useState(false);
    return (
      <>
        <Tooltip
          onClick={(e) => setopen(true)}
          title='Add post'
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}>
          <IconButton>
            <Fab color='primary' aria-label='add'>
              <Add />
            </Fab>
          </IconButton>
        </Tooltip>
        <Modal
          open={open}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClose={() => setopen(false)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box
            sx={{
              width: 480,
              height: 280,
              bgcolor: "white",
              justifyContent: "center",
            }}
            p={3}>
            <Typography variant='h6' color='gray' textAlign='center'>
              Create a post
            </Typography>
            <User>
              <Avatar
                alt='Jon'
                src='https://i.ibb.co/4F1tyPq/170517-Jennie-Kim-Blackpink-04.jpg'></Avatar>
              <Typography variant='h6' component='span' fontWeight={100} fontSize="1.2rem">
                Anika
              </Typography>
            </User>
          </Box>
        </Modal>
      </>
    );
};

export default AddPost;