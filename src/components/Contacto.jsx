import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando un servicio de email
    alert('Mensaje enviado');
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <h2 className="section-title">Contacto Premium</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p><i className="fas fa-map-marker-alt"></i> Av. Gourmet 123, Distrito Premium</p>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <p><i className="fas fa-envelope"></i> reservas@pizzapremium.com</p>
            <p><i className="fas fa-clock"></i> Lunes a Domingo: 12pm - 11pm</p>
            
            <div className="social-media">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Reservas y Consultas</h3>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
