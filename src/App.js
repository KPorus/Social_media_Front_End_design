import { Stack } from "@mui/material";
import RightBar from "./Component/RightBar";
import Sidebar from "./Component/Sidebar";
import Feed from "./Component/Feed";
import { Box } from "@mui/system";
import NavBar from "./Component/NavBar";

function App() {
 
  return (
    <Box>
      <NavBar></NavBar>
      <Stack direction='row' justifyContent='space-between'>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <RightBar></RightBar>
      </Stack>
    </Box>
  );
}

export default App;
