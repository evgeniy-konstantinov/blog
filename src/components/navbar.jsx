import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {
  AppBar,
  Avatar,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { Person } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenRegisration = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            My blog
          </Typography>
          <Box mr={3}>
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<Person />}
              onClick={handleOpenRegisration}
            >
              Log In
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Log in</DialogTitle>
              <DialogContent>
                <DialogContentText>Log in to more function</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                ></TextField>
                <TextField
                  margin="dense"
                  id="name"
                  label="Email adress"
                  type="email"
                  fullWidth
                ></TextField>
                <TextField
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                ></TextField>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Log in
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Button color="secondary" variant="contained">
            Sing up
          </Button>
          <Avatar
            alt="Remy Sharp"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sharp_Smile.jpg/1200px-Sharp_Smile.jpg"
            className={classes.avatar}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '10px',
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: '20px',
  },
});

export default Navbar;
