import { Stack } from "@mui/material";
import RightBar from "./Component/RightBar";
import Sidebar from "./Component/Sidebar";
import Feed from "./Component/Feed";

function App() {
 
  return (
    <Stack direction="row" justifyContent="space-between">
     <Sidebar></Sidebar>
     <Feed></Feed>
     <RightBar></RightBar>
    </Stack>
  );
}

export default App;
