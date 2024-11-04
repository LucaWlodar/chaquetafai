// src/pages/Nosotros.js
import React from 'react';
import './Nosotros.css';

function Nosotros() {
  return (
    <div className="nosotros-container">
      <h2 className="nosotros-title">Acerca de Nosotros</h2>
      <div className="nosotros-description">
        <p>
          Bienvenidos a nuestra página de recetas, donde compartimos nuestra pasión por la cocina.
        </p>
        <p>
          Somos un equipo dedicado a traerte las mejores recetas y consejos de cocina. 
          Nuestro objetivo es ayudarte a descubrir nuevas recetas y sabores de todo el mundo.
        </p>
        <p>
          ¡Esperamos que disfrutes de nuestra página y encuentres inspiración para tu próxima comida!
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
