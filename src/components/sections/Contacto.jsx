import { contactData } from '../../data/contactData';
import InstagramIcon from '../../assets/icons/InstagramLogo.png';
import GmailIcon from '../../assets/icons/GmailLogo.png';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto-section" id="contacto">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-intro">
          ¿Tienes preguntas o deseas solicitar talleres? ¡Nos encantaría escucharte!
        </p>

        <div className="contacto-content">
          {/* Información de Contacto */}
          <div className="contacto-info-card">
            <h3 className="contacto-info-title">Información de Contacto</h3>
            
            <div className="contacto-item">
              <img 
                src={GmailIcon}
                alt="Gmail"
                className="contacto-icon-img"
              />
              <div className="contacto-details">
                <h4>Email</h4>
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
              </div>
            </div>

            <div className="contacto-item">
              <img 
                src={InstagramIcon}
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
          </div>

          {/* Talleres Gratuitos */}
          <div className="talleres-info-card">
            <h3 className="talleres-info-title">{contactData.talleres.titulo}</h3>
            <p className="talleres-info-description">{contactData.talleres.descripcion}</p>
            <ul className="talleres-list">
              {contactData.talleres.tipos.map((tipo, index) => (
                <li key={index}>✓ {tipo}</li>
              ))}
            </ul>
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