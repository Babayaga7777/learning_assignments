import { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import MoviesRoute from "./pages/MoviesRoute";
import AboutRoute from "./pages/AboutRoute";
import FavouriteRoutes from './pages/FavouriteRoute';


const App = () => {
  const [movieData, setMovieData] = useState([])

  const pullData = (movies) => {
    console.log('In App.js');
    console.log(movies);
    setMovieData(movieData);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MoviesRoute func={pullData} />} />
        <Route path='/favourites' element={<FavouriteRoutes />} />
        <Route path='/:id' element={<AboutRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
