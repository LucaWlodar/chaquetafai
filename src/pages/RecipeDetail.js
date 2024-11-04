import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { favoritos, agregarFavorito, eliminarFavorito, esFavorito } = useFavoritos();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals[0]));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  const handleFavoritoClick = () => {
    if (esFavorito(recipe.idMeal)) {
      eliminarFavorito(recipe.idMeal);
    } else {
      agregarFavorito(recipe);
    }
  };

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Ingredients:</h3>
      <ul>
        {[...Array(20).keys()].map((i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
        })}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>

      <button onClick={handleFavoritoClick} style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: esFavorito(recipe.idMeal) ? 'red' : 'green', color: '#fff' }}>
        {esFavorito(recipe.idMeal) ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
      </button>
    </div>
  );
}

export default RecipeDetails;
