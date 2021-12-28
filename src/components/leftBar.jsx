import { Email, Home, Logout } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const LeftBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home page</Typography>
      </div>
      <div className={classes.item}>
        <Email className={classes.icon} />
        <Typography className={classes.text}>Posts</Typography>
      </div>
      <div className={classes.item}>
        <Logout className={classes.icon} />
        <Typography className={classes.text}>Log out</Typography>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    color: "#555",
    border: "1px solid #dddcdc",
    borderLeft: "none",
    paddingTop: 80,
    height: "100vh",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
    cursor: "pointer",
  },
  text: {
    fontWeight: "bold",
  },
  icon: {
    marginRight: "10px",
    fontSize: "18px",
  },
}));

export default LeftBar;
