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
      <h1>Welcome to Recipe Finder</h1>
      <input
        type="text"
        placeholder="Enter an ingredient (e.g.kjwdfvk , chicken)"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleSearch}>Search Recipes</button>
    </div>
  );
}

export default Home;
