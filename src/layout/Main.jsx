import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet } from 'react-router-dom';
import NavBar from '../Component/NavBar';
import RightBar from '../Component/RightBar';
import Sidebar from '../Component/Sidebar';

const Main = () => {
    return (
      <Box>
        <NavBar></NavBar>
        <Stack direction='row' justifyContent='space-between'>
          <Sidebar></Sidebar>
          <Outlet></Outlet>
          <RightBar></RightBar>
        </Stack>
      </Box>
    );
};

export default Main;