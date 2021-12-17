import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Main = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1>MAIN</h1>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 80,
  },
}));

export default Main;
