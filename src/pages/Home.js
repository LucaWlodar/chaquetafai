import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import papus from '../imgs/image.png';
import './Home.css';

function Home() {
  const [ingredient, setIngredient] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (ingredient.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    navigate(`/recipes?ingredient=${ingredient}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Detecta el parámetro 'error' de la URL y muestra el mensaje de error solo si está presente
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('error') === 'true') {
      setError(true);
    }
  }, [window.location.search]);

  return (
    <div className="fondo">
      <center>
        <h1 className="title">Recinder</h1>
        <div className="header">
          <span className="emoji">🍴</span>
          <h3>El Mejor Buscador De Recetas</h3>
          <span className="emoji">🔪</span>
        </div>
      </center>

      <div className="search-container">
        <input
          type="text"
          placeholder="Recindeá un ingrediente..."
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Recindear</button>
      </div>

      {error && (
        <p className="error-message">
          Receta no encontrada, prueba con otro ingrediente.
        </p>
      )}
    </div>
  );
}

export default Home;
