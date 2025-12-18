import LogoImg from '../../assets/icons/ElSembradorLogo.png';
import InstagramIcon from '../../assets/icons/InstagramLogo.png';
import GmailIcon from '../../assets/icons/GmailLogo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <img 
              src={LogoImg}
              alt="Sembrar La Palabra Logo" 
              className="footer-logo"
            />
            <p className="footer-tagline">
              Sembrando la Palabra en corazones jóvenes
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <a href="mailto:sembrarlapalabra@gmail.com" className="footer-contact-link">
                  <img 
                    src={GmailIcon}
                    alt="Gmail"
                    className="footer-icon"
                  />
                  <span>sembrarlapalabra@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/sembrarlapalabra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  <img 
                    src={InstagramIcon}
                    alt="Instagram"
                    className="footer-icon"
                  />
                  <span>@sembrarlapalabra</span>
                </a>
              </li>
            </ul>
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