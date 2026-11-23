import { LuMail, LuHeart } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa6';
import { contactData } from '../../data/contactData';
import LogoImg from '../../assets/icons/ElSembradorLogo.webp';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={LogoImg} alt="" className="footer-logo" width="64" height="64" loading="lazy" />
            <div>
              <p className="footer-name">
                Sembrar <em>la</em> Palabra
              </p>
              <p className="footer-tagline">Sembrando la Palabra en corazones jóvenes</p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <a href={`mailto:${contactData.email}`} className="footer-contact-link">
                  <span className="footer-icon">
                    <LuMail aria-hidden="true" />
                  </span>
                  <span>{contactData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactData.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  <span className="footer-icon">
                    <FaInstagram aria-hidden="true" />
                  </span>
                  <span>{contactData.instagram.handle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sembrar La Palabra. Todos los derechos reservados.</p>
          <p className="footer-made">
            Hecho con <LuHeart aria-label="amor" /> para la próxima generación
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
