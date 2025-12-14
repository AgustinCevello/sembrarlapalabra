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
                <img 
                  src={GmailIcon}
                  alt="Gmail"
                  className="footer-icon"
                />
                <a href="mailto:sembrarlapalabra@gmail.com">
                  sembrarlapalabra@gmail.com
                </a>
              </li>
              <li>
                <img 
                  src={InstagramIcon}
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
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sembrar La Palabra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;