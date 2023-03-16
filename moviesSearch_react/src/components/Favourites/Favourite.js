import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

const API = "http://www.omdbapi.com/?apikey=7bc296bf";

const Favourite = () => {
  const [favMovies, setFavMovies] = useState([]);
  const allImdbIds = Object.keys(JSON.parse(localStorage.getItem("imdb")));



  const getFavourites = () => {
    allImdbIds.forEach( async (imdbId) => {
      const URL = `${API}&i=${imdbId}`;
      const movieData = await axios.get(URL);
  
      console.log(movieData.data);
      setFavMovies((prevState) => {
        return [...prevState, movieData.data];
      });
    } )
  };

  useEffect(() => {
    getFavourites();
  }, [])

  return (
    <div style={{ backgroundColor: "black" }}>
      {favMovies.map((movie) => {
        return (
          <MovieCard
            movieTitle={movie.Title}
            moviePoster={movie.Poster}
            movieImdbId={movie.imdbID}
          />
        );
      })}
    </div>
  );
};

export default Favourite;
