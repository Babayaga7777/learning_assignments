import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AboutMovie from "../components/AboutMovie/AboutMovie";

const API = "http://www.omdbapi.com/?apikey=7bc296bf";

const AboutRoute = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false)

  const params = useParams();
  const URL = `${API}&i=${params.id}`;

  console.log(params);
  console.log(URL);

  useEffect( () => {
    (async () => {
      console.log("reached")
      const movieData = await axios.get(URL);
      console.log('movieData', movieData);
      setMovie(movieData.data);
    })();

  }, [])


  if (!movie.length) {
    console.log("loading...")
  }

  return <AboutMovie movieDetails={movie} />
};

export default AboutRoute;
