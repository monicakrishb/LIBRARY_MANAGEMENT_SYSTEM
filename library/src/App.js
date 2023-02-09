import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BookList from './Component/BookList';
import Footer from './Component/Footer';
import Favorites from './Component/Favorites';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard';
import Home from './Component/Home';
import BookSearch from './Component/BookSearch/Sample';






function App() {
  return (
    <div className="App">
      {
        <div>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/favourites" element={<Favorites />} />
            <Route path="/booksearch" element={<BookSearch />} />
          </Routes>
        
          <Footer />

        </div>




      }

    </div>
  );
}


export default App;
