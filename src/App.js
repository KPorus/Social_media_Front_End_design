import styled from '@emotion/styled';
import { Add, Settings } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

function App() {
  const TestButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: "red",
    "&:hover": {
      backgroundColor: "orange",
      color: "white",
    },
  }));
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button variant='contained' color='other' startIcon={<Settings />}>
        Settings
      </Button>
      <Button
        variant='contained'
        color='success'
        size='small'
        startIcon={<Add />}>
        Add Profile
      </Button>
      <Button
        variant='contained'
        sx={{
          backgroundColor: "skyblue",
          color: "red",
          "&:hover": {
            backgroundColor: "orange",
            color: "white",
          },
        }}>
        My unique button
      </Button>
      <Typography variant='h1' className='text-center uppercase'>
        hello world
      </Typography>
      <TestButton>My test button</TestButton>
    </div>
  );
}

export default App;
