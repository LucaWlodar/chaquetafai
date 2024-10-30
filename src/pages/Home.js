import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [ingredient, setIngredient] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/recipes?ingredient=${ingredient}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem' }}> 
      <center>
        <h1>Recinder</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <img 
            src="https://pbs.twimg.com/media/EOR-L3YWoAUDM4d.jpg" 
            alt="Icono Izquierda" 
            style={{ width: '100px', height: '100px' }}
          />
          <h3>El Mejor Buscador De Recetas</h3>
          <img 
            src="https://pbs.twimg.com/media/EOR-L3YWoAUDM4d.jpg" 
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
          style={{ flex: 1, padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5rem 1rem', marginTop: '-20px' }}>Recindear</button>
      </div>
    </div>
  );
}

export default Home;