import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Explora</h4>
          <Link to="/nosotros" className="footer-link">About Us</Link>
        </div>
        <div className="footer-socials">
          <h4>Contáctanos</h4>
          <a href="mailto:CocinaConSabor@gmail.com" className="footer-link">Send Us A Mail</a>
        </div>
      </div>
      <p className="footer-copy">&copy; 2024 My Recipe Page. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
