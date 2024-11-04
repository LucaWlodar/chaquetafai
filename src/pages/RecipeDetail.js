import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';
import './RecipeDetails.css';

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
    <div className="recipe-details-container">
      <h1 className="recipe-title">{recipe.strMeal}</h1>
      <img className="recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
      
      <div className="recipe-section">
        <h3>Ingredients:</h3>
        <ul className="ingredients-list">
          {[...Array(20).keys()].map((i) => {
            const ingredient = recipe[`strIngredient${i + 1}`];
            const measure = recipe[`strMeasure${i + 1}`];
            return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
          })}
        </ul>
      </div>

      <div className="recipe-section">
        <h3>Instructions:</h3>
        <p className="instructions">{recipe.strInstructions}</p>
      </div>

      <button 
        onClick={handleFavoritoClick} 
        className={`favorite-button ${esFavorito(recipe.idMeal) ? 'remove' : 'add'}`}
      >
        {esFavorito(recipe.idMeal) ? 'Delete From Favourites' : 'Add To Favourites'}
      </button>
    </div>
  );
}

export default RecipeDetails;
