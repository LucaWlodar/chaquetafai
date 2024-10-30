import React, { useEffect, useState } from 'react';

function RandomRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Cargar 50 recetas aleatorias
    const fetchRandomRecipes = async () => {
      const randomRecipes = [];
      for (let i = 0; i < 50; i++) {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        randomRecipes.push(data.meals[0]);
      }
      setRecipes(randomRecipes);
    };

    fetchRandomRecipes();
  }, []);

  return (
    <div>
      <h2>Random Recipes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} style={{ margin: '1rem', textAlign: 'center' }}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomRecipes;
