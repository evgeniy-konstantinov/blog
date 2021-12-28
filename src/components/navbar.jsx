import React, { useState } from "react";

import Button from "@mui/material/Button";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { Person } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import {
  userEmailSingUpDataAction,
  userPasswordSingUpDataAction,
} from "../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen((prev) => !prev);
  }

  const setUserData = (e) => {
    dispatch(userEmailSingUpDataAction(e.target.value));
    dispatch(userPasswordSingUpDataAction(e.target.value));
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
                  id="email"
                  label="Email adress"
                  type="email"
                  onChange={setUserData}
                  fullWidth
                ></TextField>
                <TextField
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  onChange={setUserData}
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
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: "20px",
  },
});

export default Navbar;
