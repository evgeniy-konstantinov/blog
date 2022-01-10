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
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

import { Box } from '@mui/system';
import { Person } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { userSingUpDataAction } from '../redux/actions';

const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [userValue, setUserValue] = useState({ email: '', password: '' });

  function handleClose() {
    setOpen((prev) => !prev);
  }
  // const onChange = useCallback(
  //   ({ target }) => {
  //     setUserValue((userValue) => ({
  //       ...userValue,
  //       [target.name]: target.value,
  //     }));
  //   },
  //   [setUserValue]
  // );
  const setUserData = () => {
    dispatch(userSingUpDataAction(userValue));
    console.log(userValue);
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
            <Button color="inherit" variant="outlined" startIcon={<Person />}>
              Log In
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Sing up</DialogTitle>
              <DialogContent>
                <DialogContentText>Sing up to more function</DialogContentText>
                {/* <TextField
                  
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                ></TextField> */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email adress"
                  type="email"
                  onChange={(e) => setUserValue({ email: e.target.value })}
                  fullWidth
                ></TextField>
                <TextField
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  onChange={(e) =>
                    setUserValue({ ...userValue, password: e.target.value })
                  }
                  fullWidth
                ></TextField>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button color="primary" onClick={setUserData}>
                  Sing up
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Sing up
          </Button>
          <Avatar alt="Remy Sharp" className={classes.avatar} />
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

// ({ target }) => {
//   setUserValue((userValue) => ({
//     ...userValue,
//     [target.name]: target.value,
//   }));
// };
