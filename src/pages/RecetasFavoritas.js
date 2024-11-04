import { useFavoritos } from '../context/FavoritosContext';
import { Link } from 'react-router-dom';

function RecetasFavoritas() {
  const { favoritos } = useFavoritos();

  return (
    <div>
      <h2>Recetas Favoritas</h2>
      {favoritos.length === 0 ? (
        <p>No tienes recetas favoritas aún.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {favoritos.map((recipe) => (
            <div key={recipe.idMeal} style={{ margin: '1rem' }}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" />
              <h3>{recipe.strMeal}</h3>
              <Link to={`/recipe/${recipe.idMeal}`}>Ver receta</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecetasFavoritas;
