import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
function App() {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My blog</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              Log In
            </Button>
          </Box>
          <Button color="secondary" variant="contained">
            Sing up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
