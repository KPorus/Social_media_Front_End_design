import { Add } from '@mui/icons-material';
import { Fab, IconButton, Tooltip } from '@mui/material';
import React from 'react';

const AddPost = () => {
    return (
      <>
        <Tooltip title='Add post' sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
          <IconButton>
            <Fab color='primary' aria-label='add'>
              <Add />
            </Fab>
          </IconButton>
        </Tooltip>
      </>
    );
};

export default AddPost;