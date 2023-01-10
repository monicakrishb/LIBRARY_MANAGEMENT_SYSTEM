import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
          <h1>Trending Books</h1>
        </div>
        <div className='fav'>
          <Link to="/favourites"><h3>Your Favourites</h3></Link>
          </div>
          <div className='prog'>
          <Link to="/programming"><h3>Programming</h3></Link>
          </div>
          <div className='Muthu'>
          <Link to="/Na muthukumar"><h3>Na Muthukumar</h3></Link>
          </div>
          <div className='prog'>
          <Link to="/vaali"><h3>Vaali</h3></Link>
          </div>
        </div>
  );
}

export default Navbar