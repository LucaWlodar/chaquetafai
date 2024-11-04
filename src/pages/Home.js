import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [ingredient, setIngredient] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Si el ingrediente está vacío, redirige a recetas aleatorias
    navigate(`/recipes?ingredient=${ingredient}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='fondo' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem' }}> 
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
        <button onClick={handleSearch} style={{ padding: '0.5rem 1rem', marginTop: '-20px' }}>Recindear</button>
      </div>
    </div>
  );
}

export default Home;
