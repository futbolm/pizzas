import React from 'react';

function Bebidas() {
  return (
    <section className="drinks-section" id="bebidas">
      <div className="container">
        <h2 className="section-title">Bebidas Selectas</h2>
        <div className="drinks-grid">
          <div className="drink-item">
            <img src="https://images.unsplash.com/photo-1535958636474-b021ee887b13" alt="Vino Tinto" />
            <h3>Vinos Italianos</h3>
            <p>Selección de vinos tintos y blancos de las mejores regiones de Italia.</p>
            <span className="price">Desde $12.99</span>
          </div>
          
          <div className="drink-item">
            <img src="https://images.unsplash.com/photo-1605270012917-bf157c5a9541" alt="Cerveza Artesanal" />
            <h3>Cervezas Premium</h3>
            <p>Cervezas artesanales locales e importadas.</p>
            <span className="price">Desde $8.99</span>
          </div>
          
          <div className="drink-item">
            <img src="https://64.media.tumblr.com/23beb3b7a163d921b467cd20c648f8e5/72f69c48d0a3b49b-95/s640x960/e2c49ed366ac874d837779457b5a779a88358131.jpg" alt="Refresco" />
            <h3>Bebidas Montana</h3>
            <p>San Pellegrino, Chinotto y otras bebidas italianas.</p>
            <span className="price">Desde $4.99</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bebidas;
