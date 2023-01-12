import { Button, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <Typography variant="h1" className='text-center uppercase'>
        hello world
      </Typography>
    </div>
  );
}

export default App;
