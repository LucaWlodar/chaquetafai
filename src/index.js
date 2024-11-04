import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import RecipeDetails from "./pages/RecipeDetail";
import Navbar from "./pages/Navbar";
import Footer from "./Footer";
import RecetasFavoritas from "./pages/RecetasFavoritas";
import { FavoritosProvider } from "./context/FavoritosContext";
import Chaquecetas from './pages/Chaquecetas';
import Nosotros from './pages/Nosotros';

ReactDOM.render(
  <BrowserRouter>
    <FavoritosProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recetas" element={<RecetasFavoritas />} />
        <Route path="/chaquecetas" element={<Chaquecetas />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

      <Footer />
    </FavoritosProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
