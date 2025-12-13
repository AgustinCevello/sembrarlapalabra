import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <img 
              src="/src/assets/icons/ElSembradorLogo.png" 
              alt="Sembrar La Palabra Logo" 
              className="footer-logo"
            />
            <p className="footer-tagline">
              Sembrando la Palabra en corazones jóvenes
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#inclusion">Inclusión</a></li>
              <li><a href="#ninos-adolescentes">Niños y Adolescentes</a></li>
              <li><a href="#jovenes">Jóvenes</a></li>
              <li><a href="#libros">Libros</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <span>📧</span>
                <a href="mailto:sembrarlapalabra@gmail.com">
                  sembrarlapalabra@gmail.com
                </a>
              </li>
              <li>
                <span>🌐</span>
                <span>sembrarlapalabra.com.ar</span>
              </li>
              <li>
                <img 
                  src="/src/assets/icons/InstagramLogo.png" 
                  alt="Instagram"
                  className="footer-icon"
                />
                <a 
                  href="https://www.instagram.com/sembrarlapalabra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  @sembrarlapalabra
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Misión</h4>
            <p className="footer-mission">
              Proveer herramientas para iglesias, líderes, maestros y padres, 
              para el evangelismo y crecimiento espiritual de niños, 
              adolescentes y jóvenes.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sembrar La Palabra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;