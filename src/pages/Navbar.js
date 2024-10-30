import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', background: '#333', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}> {/* Añadimos flexbox aquí */}
        <Link to="/" style={{ color: '#fff', margin: '0 1rem' }}>Home</Link>
        <Link to="/recipes" style={{ color: '#fff', margin: '0 1rem' }}>Top recetas</Link>
        <Link to="/chaquecetas" style={{ color: '#fff', margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
          Chaquecetas
          <img 
            src="https://media.telemetro.com/p/203712f30da3c37e95b9c9cc623fc1ba/adjuntos/311/imagenes/002/761/0002761191/1200x675/smart/el-museo-la-comida-asquerosa-llega-los-angeles-fotoig.png" 
            alt="Icono Izquierda" 
            style={{ width: '30px', height: '30px', marginLeft: '0.5rem' }}
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
