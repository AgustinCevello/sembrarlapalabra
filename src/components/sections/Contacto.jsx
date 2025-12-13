import { useState } from 'react';
import Button from '../common/Button';
import { contactData } from '../../data/contactData';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:${contactData.email}?subject=${encodeURIComponent(formData.asunto)}&body=${encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section className="contacto-section" id="contacto">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-intro">
          ¿Tienes preguntas o deseas solicitar talleres? ¡Nos encantaría escucharte!
        </p>

        <div className="contacto-content">
          {/* Información de Contacto */}
          <div className="contacto-info">
            <h3 className="contacto-info-title">Información de Contacto</h3>
            
            <div className="contacto-item">
              <div className="contacto-icon">📧</div>
              <div className="contacto-details">
                <h4>Email</h4>
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">🌐</div>
              <div className="contacto-details">
                <h4>Sitio Web</h4>
                <p>{contactData.web}</p>
              </div>
            </div>

            <div className="contacto-item">
              <img 
                src={contactData.instagram.icon} 
                alt="Instagram" 
                className="contacto-icon-img"
              />
              <div className="contacto-details">
                <h4>Instagram</h4>
                <a 
                  href={contactData.instagram.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {contactData.instagram.handle}
                </a>
              </div>
            </div>

            <div className="talleres-info">
              <h4>{contactData.talleres.titulo}</h4>
              <p>{contactData.talleres.descripcion}</p>
              <ul className="talleres-list">
                {contactData.talleres.tipos.map((tipo, index) => (
                  <li key={index}>✓ {tipo}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="contacto-form-container">
            <h3 className="contacto-form-title">Envíanos un Mensaje</h3>
            <form className="contacto-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto *</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  placeholder="Motivo de tu consulta"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <Button type="submit" variant="primary" className="submit-button">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>

        {/* Misión */}
        <div className="mision-section">
          <h3 className="mision-title">Nuestra Misión</h3>
          <p className="mision-text">
            Proveer herramientas para iglesias, líderes, maestros y padres, 
            para el evangelismo y crecimiento espiritual de niños, adolescentes y jóvenes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;