import Movies from "../components/Movies/Movies";

const MoviesRoute = (props) => {
  const pullData = movie => {
    props.func(movie);
  }

  // func is used for lifting the state up
  return <Movies func={pullData}/>;
};

export default MoviesRoute;
