import { useState } from 'react';
import { Box } from '@mui/system';
import React from 'react';
import Post from './Post';
import { Skeleton, Stack } from '@mui/material';

const Feed = () => {
//   const [count, setCount] = useState(0);
//   const countUp = ()=>
//   {
//     let c = count +1;
//     setCount(c);
//   }
const [loading, setLoading] = useState(true);

setTimeout(() => {
  setLoading(false);
}, [3000]);
    return (
      <Box flex={4} marginX={2} p={2}>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant='text' height={100} />
            <Skeleton variant='text' height={20} />
            <Skeleton variant='text' height={20} />
            <Skeleton variant='rectangular' height={300} />
          </Stack>
        ) : (
          <>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </>
        )}
      </Box>
    );
};

export default Feed;