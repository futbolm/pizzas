import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PizzaPremium</h3>
            <p>
              Experiencias gastronómicas excepcionales con ingredientes de la más alta calidad.
            </p>
          </div>

          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#promociones">Promociones</a></li>
              <li><a href="#bebidas">Bebidas</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Horario</h3>
            <p>Lunes a Viernes: 12pm - 11pm</p>
            <p>Sábado y Domingo: 12pm - 12am</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 PizzaPremium. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
