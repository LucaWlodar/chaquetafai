import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [ingredient, setIngredient] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/recipes?ingredient=${ingredient}`);
  };

  return (
    <div> 
      <center>
        <h1>Recinder</h1>
        <h3>El Mejor Buscador De Recetas</h3>
      </center>
      
      <input
        type="text"
        placeholder="Recindeá un Ingrediente"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleSearch}>Recindear</button>
    </div>
  );
}

export default Home;
