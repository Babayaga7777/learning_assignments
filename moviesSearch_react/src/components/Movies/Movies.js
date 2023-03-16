import { useState } from "react";

import axios from "axios";

import MovieCard from "../MovieCard/MovieCard";
import Navbar from "../Navbar/Navbar";

import classes from "./Movies.module.css";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=7bc296bf";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");

  const searchMovieHandler = async () => {
    const search = `${API}&s=${movieTitle}`;
    const allMovies = await axios.get(search);

    setMovies(allMovies.data.Search);
 
    props.func(allMovies.data.Search);
  };



  return (
    <div className={classes["container"]}>
      <Navbar />
      <div className={classes["input-search"]}>
        <input
          type="text"
          placeholder="Search Movie"
          className={classes["input-movie-box"]}
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button
          className={classes["input-search-box"]}
          onClick={searchMovieHandler}
        >
          Search
        </button>
      </div>
      <div className={classes["all-movies"]}>
        {movies.map((movie) => {
          return (
              <MovieCard
                key={Math.floor(Math.random() * 100000)}
                movieTitle={movie.Title}
                moviePoster={movie.Poster}
                movieImdbId={movie.imdbID}
              />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;

