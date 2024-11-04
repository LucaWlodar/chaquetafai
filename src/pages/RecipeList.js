import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const ingredient = new URLSearchParams(location.search).get('ingredient');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();

        if (data.meals) {
          setRecipes(data.meals);
        } else {
          // Si no hay resultados, redirige a Home con error activado
          navigate(`/?error=true`);
        }
      } catch (err) {
        // En caso de error en la solicitud, redirige a Home con error activado
        navigate(`/?error=true`);
      }
    };

    fetchRecipes();
  }, [ingredient, navigate]);

  return (
    <div>
      <h2>Recetas con "{ingredient}"</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
