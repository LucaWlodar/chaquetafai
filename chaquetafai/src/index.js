import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Importamos App como el punto de entrada principal
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Renderizamos App */}
  </React.StrictMode>
);

reportWebVitals();