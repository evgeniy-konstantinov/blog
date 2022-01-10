import React from 'react';

// import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Navbar from './components/navbar';
import LeftBar from './components/leftBar';
import Main from './components/main';

function App() {
  // const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7}>
          <Main />
        </Grid>
        <Grid item sm={3}>
          {/* <RightBar /> */}
        </Grid>
      </Grid>
    </>
  );
}

// const useStyles = makeStyles((theme) => ({}));

export default App;
