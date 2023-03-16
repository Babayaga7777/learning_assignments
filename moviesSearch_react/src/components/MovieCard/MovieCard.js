// import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./MovieCard.module.css";

const MovieCard = (props) => {
  // const [checkboxState, setCheckboxState] = useState(false);
  // const [favourite, setFavourite] = useState({});

  const likeHandler = () => {
    let favFromLocalStorage = JSON.parse(localStorage.getItem('imdb'));

    if (favFromLocalStorage) {
      let fav = favFromLocalStorage[props.movieImdbId];
      if (!fav) {
        favFromLocalStorage[props.movieImdbId] = true;
      }
      else {
        delete favFromLocalStorage[props.movieImdbId];
      }
    }
    else {
      let obj = {};
      obj[props.movieImdbId] = true;
      favFromLocalStorage = obj;
    }
    
    localStorage.setItem('imdb', JSON.stringify(favFromLocalStorage));

    console.log(localStorage.getItem('imdb'));
  }

  return (
    <div className={classes["movie-card"]}>
      <div className={classes["movie-poster"]}>
        <img src={props.moviePoster} alt={props.movieTitle} />
      </div>
      <div className={classes["movie-title"]}>{props.movieTitle}</div>
      <div className={classes["movie-desc"]}>
        <div>
          <Link
            className={classes["movie-read-more"]}
            to={"/" + props?.movieImdbId}
          >
            Know more
          </Link>
        </div>
        <div className={classes["movie-likes"]}>
          <input
            type="checkbox"
            // value={checkboxState}
            onChange={likeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
