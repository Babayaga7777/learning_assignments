import Navbar from "../../components/Navbar/Navbar";

import classes from "./AboutMovie.module.css";

const AboutMovie = (props) => {
  return (
    <div className={classes["about-movie-container"]}>
      <Navbar />
      <div className={classes["about-movie"]}>
        <div className={classes["about-movie-left"]}>
          <img src={props.movieDetails.Poster} alt={props.movieDetails.Title} />
        </div>
        <div className={classes["about-movie-right"]}>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-title"],
            ].join(" ")}
          >
            {props.movieDetails.Title}
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-released"],
            ].join(" ")}
          >
            Released: <span>{props.movieDetails.Released}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-runtime"],
            ].join(" ")}
          >
            Runtime: <span>{props.movieDetails.Runtime}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-genre"],
            ].join(" ")}
          >
            Genre: <span>{props.movieDetails.Genre}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-director"],
            ].join(" ")}
          >
            Director: <span>{props.movieDetails.Director}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-writer"],
            ].join(" ")}
          >
            Writer: <span>{props.movieDetails.Writer}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-actors"],
            ].join(" ")}
          >
            Actors: <span>{props.movieDetails.Actors}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-language"],
            ].join(" ")}
          >
            Language: <span>{props.movieDetails.Language}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-country"],
            ].join(" ")}
          >
            Country: <span>{props.movieDetails.Country}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-awards"],
            ].join(" ")}
          >
            Awards: <span>{props.movieDetails.Awards}</span>
          </div>
          <div
            className={[
              classes["movie-info"],
              classes["about-movie-plot"],
            ].join(" ")}
          >
            Plot: <span>{props.movieDetails.Plot}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMovie;
