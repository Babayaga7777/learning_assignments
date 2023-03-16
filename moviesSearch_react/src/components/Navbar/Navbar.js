import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <p className={classes['app-name']}>Movie Hub</p>
      <Link to={`/favourites`}>Favourites</Link>
    </div>
  )
}

export default Navbar;