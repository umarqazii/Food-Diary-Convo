import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetails from './pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe-details/:id' element={<RecipeDetails />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
