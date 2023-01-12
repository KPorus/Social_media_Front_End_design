import { Add, Settings } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button variant='contained' color='secondary' startIcon={<Settings />}>
        Settings
      </Button>
      <Button variant='contained' color='success' size='small' startIcon={<Add/>}>
        Add Profile
      </Button>
      <Button variant='contained' sx={{
        backgroundColor:"skyblue",
        color:"red",
        "&:hover":
        {
          backgroundColor:"orange",
          color:"white",
        }
      }}>My unique button</Button>
      <Typography variant='h1' className='text-center uppercase'>
        hello world
      </Typography>
    </div>
  );
}

export default App;
