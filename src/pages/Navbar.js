import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', background: '#333', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', margin: '0 1rem' }}>Home</Link>
        <Link to="recetas" style={{ color: '#fff', margin: '0 1rem' }}>Favourite Recipes</Link>
        <Link to="/chaquecetas" style={{ color: '#fff', margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
        Chaquecetas</Link>
      </div>
    </nav>
  );
}

export default Navbar;
