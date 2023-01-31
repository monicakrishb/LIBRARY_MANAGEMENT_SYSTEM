
import React from 'react'
import './App.css';
import { useAppContext } from './context/appContext';
import Nav from './Nav';

const Favorites = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();
  console.log('favourites are', favourites);

  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div>
      {/* <Nav/> */}
    <div className='favourites'>
      {favourites.length > 0 ? favourites.map((book) => (
        <div key={book.id} className="book">
          <div> <h4>{book.title}</h4></div>
          <div><img className="wish" id="wishlist" src={book.image_url} alt="#" /></div>
          <div>
            {favouritesChecker(book.id) ? (
              <button onClick={() => removeFromFavourites(book.id)}>
                Remove from favourites </button>
            ) : (
              <button onClick={() => addToFavourites(book)}>
                Add to Favourites
              </button>
            )}
          </div> </div>

      )) : <h5>you dont have any favourite book yet</h5>}
    </div>
    <br/>
    <br/>
    </div>
  );
}

export default Favorites

