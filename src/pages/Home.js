import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

function Home() {
  const [ingredient, setIngredient] = useState('');
  const [error, setError] = useState(false); // Estado para manejar el error
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Verifica si la URL tiene el parámetro error=true para mostrar el mensaje
    const queryParams = new URLSearchParams(location.search);
    setError(queryParams.get('error') === 'true');
  }, [location]);

  const handleSearch = () => {
    if (ingredient.trim() === '') {
      setError(true);
      return;
    }

    // Redirige a RecipeList y restablece el error si la búsqueda es válida
    setError(false);
    navigate(`/recipes?ingredient=${ingredient}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='fondo' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
      <center>
        <h1>Recinder</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <img 
            src="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/HF_Y24_R16_W24_ES_ESSGPB21283-2_Main_high-97359b19.jpg" 
            alt="Icono Izquierda" 
            style={{ width: '100px', height: '100px' }}
          />
          <h3>El Mejor Buscador De Recetas</h3>
          <img 
            src="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/HF_Y24_R16_W24_ES_ESSGPB21283-2_Main_high-97359b19.jpg" 
            alt="Icono Derecha" 
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      </center>

      <div style={{ display: 'flex', alignItems: 'center', width: '50%', maxWidth: '500px', marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Recindeá Un Ingrediente"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ flex: 1, padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5rem 1rem' }}>Recindear</button>
      </div>

      {error && (
        <p style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginTop: '1rem' }}>
          Receta no encontrada, pruebe con otro ingrediente.
        </p>
      )}
    </div>
  );
}

export default Home;
