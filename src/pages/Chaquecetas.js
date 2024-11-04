import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Chaquecetas() {
  const [recipe, setRecipe] = useState(null);

  // Función para obtener una receta aleatoria
  const fetchRandomRecipe = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await response.json();
    setRecipe(data.meals[0]);
  };

  // Cargar una receta aleatoria cuando el componente se monta
  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>🍲 Receta Aleatoria 🍲</h2>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '300px', borderRadius: '10px' }} />
      <p>
        <Link to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none', color: '#385188', fontWeight: 'bold' }}>
          Ver detalles de la receta
        </Link>
      </p>
      <button onClick={fetchRandomRecipe} style={{ padding: '0.5rem 1rem', marginTop: '1rem', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        🍴 Otra receta aleatoria
      </button>
    </div>
  );
}

export default Chaquecetas;
