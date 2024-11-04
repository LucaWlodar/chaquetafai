import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  // Cargar favoritos desde localStorage cuando el componente se monta
  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosGuardados);
  }, []);

  // Guardar favoritos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarFavorito = (receta) => {
    setFavoritos((prev) => [...prev, receta]);
  };

  const eliminarFavorito = (id) => {
    setFavoritos((prev) => prev.filter((receta) => receta.idMeal !== id));
  };

  const esFavorito = (id) => {
    return favoritos.some((receta) => receta.idMeal === id);
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarFavorito, eliminarFavorito, esFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}
