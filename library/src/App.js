import React,{useState}from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Component/Login';
import Home from './Component/Home';
import BookList from './Component/BookList';
import Bookdetails from './Component/Bookdetails';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Favorites from './Component/Favorites';


function App() {
return ( 
    <div className="App">
      {
        <div>
          <Navbar/>
          <Routes>
              {/* <Route path='/'element={<Login/>}/>
              <Route path="home"element={<Home/>}/> */}
              <Route path="/"element={<BookList/>}/>
              <Route path="/books/:id"element={<Bookdetails/>}/>
              <Route path="/favourites"element={<Favorites/>}/>
              
            </Routes>
            <Footer/>
        </div>
      
        
      
      }
     
    </div>
  );
    }


export default App;
