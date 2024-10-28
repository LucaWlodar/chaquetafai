import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals[0]));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

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
    </div>
  );
}

export default RecipeDetails;
