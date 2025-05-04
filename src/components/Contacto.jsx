/*import React, { useState } from 'react';

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

export default Contacto;*/

import React, { useState } from 'react';
 // Asegúrate de tener este archivo CSS

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Validación para teléfono: solo números
    if (id === 'phone' && value && !/^\d*$/.test(value)) return;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = 'Correo electrónico inválido';
    if (formData.phone && !/^\d{7,15}$/.test(formData.phone))
      newErrors.phone = 'Teléfono inválido (7-15 dígitos)';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Mensaje enviado');
      // Aquí podrías limpiar el formulario o enviar datos a un backend
    }
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
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className={errors.name ? 'input-error' : ''}
                  required
                />
                {errors.name && <small className="error">{errors.name}</small>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={errors.email ? 'input-error' : ''}
                  required
                />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className={errors.phone ? 'input-error' : ''}
                />
                {errors.phone && <small className="error">{errors.phone}</small>}
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  className={errors.message ? 'input-error' : ''}
                  required
                ></textarea>
                {errors.message && <small className="error">{errors.message}</small>}
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

