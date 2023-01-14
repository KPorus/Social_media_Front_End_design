import { useState } from "react";
import {
  Add,
  DateRange,
  EmojiEmotions,
  InsertPhoto,
  PersonAddAlt1,
  VideoCameraFront,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";

const User = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "1.2rem",
});

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
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            width: 480,
            height: 280,
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
            <Typography
              variant='h6'
              component='span'
              fontWeight={100}
              fontSize='1.2rem'>
              Anika
            </Typography>
          </User>
          <TextField
            fullWidth
            id='standard-multiline-static'
            multiline
            rows={2}
            placeholder="What's On Your mind"
            variant='standard'
          />
          <Stack direction='row' gap='0.5rem' margin={2}>
            <EmojiEmotions sx={{ color: "yellowgreen" }} />
            <InsertPhoto color='success' />
            <VideoCameraFront color='error' />
            <PersonAddAlt1 color='primary' />
          </Stack>

          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'>
            <Button>Post</Button>
            <Button sx={{ width: "15%" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
