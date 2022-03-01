import React, { useEffect } from 'react';
import './App.css';
import { Container, Button, Typography, Grid, TextField } from '@mui/material';

function App() {
  useEffect(() => {
    console.log("this is the secret");
    console.log(process.env.REACT_APP_CLIENT_SECRET);
  }, []);

  return (
    <div className="App">
      <Container sx={{ paddingTop: '1em' }}>
        <Typography sx={{ marginBottom: '1em' }} variant="h3">Testing OAuth with React</Typography>

        <Grid justifyContent="center">
          <Grid sx={{ paddingBottom: '1em', margin: '0 auto' }} item>
            <TextField id="standard-basic" label="Username" variant="standard" />
          </Grid>

          <Grid sx={{ paddingBottom: '1em', margin: '0 auto' }} item>
            <TextField id="standard-basic" label="Password" variant="standard" />
          </Grid>

          <Grid sx={{ paddingBottom: '.5em' }} item>
            <Button sx={{ width: '15em', backgroundColor: 'red', color: 'white', padding: '1em 2em' }}>Login</Button>
          </Grid>

          <Grid item>
            <Button sx={{ width: '15em', border: '1px solid gray', padding: '1em 2em' }}>Login with Google</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
