import React from 'react';
 // Asegúrate de crear este archivo si estás usando CSS separado

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <h1>Pizza Artesanal Premium</h1>
          <p>Ingredientes selectos, masa fermentada 72 horas y horneado tradicional</p>
          <a href="#menu" className="btn">Ver Menú</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
