import { Box } from '@mui/system';
import React from 'react';
import Post from './Post';

const Feed = () => {
//   const [count, setCount] = useState(0);
//   const countUp = ()=>
//   {
//     let c = count +1;
//     setCount(c);
//   }
    return (
      <Box flex={4} marginX={2} p={2} >
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Box>
    );
};

export default Feed;