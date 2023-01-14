import { useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Stack } from '@mui/system';
import { Outlet } from 'react-router-dom';
import AddPost from '../Component/AddPost';
import NavBar from '../Component/NavBar';
import RightBar from '../Component/RightBar';
import Sidebar from '../Component/Sidebar';


const Main = () => {
  const [mode, setmode] = useState("light");
  const darkMode = createTheme({
    palette:
    {
      mode:mode
    }
  })
    return (
      <ThemeProvider theme={darkMode}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar></NavBar>
        <Stack direction='row' justifyContent='space-between'>
          <Sidebar setmode={setmode} mode={mode}></Sidebar>
          <Outlet></Outlet>
          <RightBar></RightBar>
        </Stack>
        <AddPost></AddPost>
      </Box>
      </ThemeProvider>
    );
};

export default Main;