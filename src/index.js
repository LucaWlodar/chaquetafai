import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList'; 
import RecipeDetails from './pages/RecipeDetail'; 

ReactDOM.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
