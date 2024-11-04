import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const ingredient = new URLSearchParams(location.search).get('ingredient');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals || []));
  }, [ingredient]);

  return (
    <div>
      <h2>Recetas con "{ingredient}"</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} style={{ margin: '1rem' }}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" />
            <h3>{recipe.strMeal}</h3>
            <Link to={`/recipe/${recipe.idMeal}`}>Ver receta</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
