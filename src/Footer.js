import React from 'react';
import './pages/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Explora</h4>
          <ul>
            <p><a href="#acerca">Acerca de Nosotros</a></p>
            <p><a href="#terminos">Términos y Condiciones</a></p>
          </ul>
        </div>
        <div className="footer-socials">
        
        <h4>Contáctanos</h4>
          <a href="mailto:CocinaConSabor@gmail.com">Envíanos un correo</a>
        </div>
        <p>&copy; 2024 Mi Página de Recetas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;