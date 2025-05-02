import React from 'react';

function Promociones() {
  return (
    <section className="promo-section" id="promociones">
      <div className="container">
        <h2 className="section-title">Promociones Exclusivas</h2>
        <div className="promo-cards">
          <div className="promo-card">
            <div className="promo-badge">30% OFF</div>
            <h3>Martes de Pizza</h3>
            <p>Todas nuestras pizzas premium con 30% de descuento los martes.</p>
            <span className="promo-code">Código: MARTES30</span>
          </div>
          
          <div className="promo-card">
            <div className="promo-badge">2x1</div>
            <h3>Happy Hour</h3>
            <p>De 4pm a 7pm, disfruta 2x1 en pizzas medianas.</p>
            <span className="promo-code">Código: HAPPYPM</span>
          </div>
          
          <div className="promo-card">
            <div className="promo-badge">REGALO</div>
            <h3>Postre Cortesía</h3>
            <p>Con tu compra mayor a $50 recibe un tiramisú de cortesía.</p>
            <span className="promo-code">Código: DOLCE50</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promociones;
