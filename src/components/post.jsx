import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Post = () => {
  const classes = useStyles();

  return <h1>MAIN</h1>;
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 80,
  },
}));

export default Post;
