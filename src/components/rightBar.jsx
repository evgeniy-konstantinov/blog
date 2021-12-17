import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const RightBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1>RightBar</h1>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 80,
  },
}));

export default RightBar;
