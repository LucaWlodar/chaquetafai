import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetail';
import Navbar from './pages/Navbar';
import RandomRecipes from './pages/RandomRecipes';

ReactDOM.render(
  <BrowserRouter>
    <Navbar /> {}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<RecipeList />} />
      <Route path="/recipes" element={<RandomRecipes />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
