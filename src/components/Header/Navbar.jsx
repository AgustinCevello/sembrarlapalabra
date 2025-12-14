import { useState, useEffect } from 'react';
import useScrollTo from '../../hooks/useScrollTo';
import LogoImg from '../../assets/icons/ElSembradorLogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const scrollToSection = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src={LogoImg}
            alt="Sembrar La Palabra Logo" 
            onClick={() => handleNavClick('inicio')}
          />
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu-active' : ''}`}>
          <li className="navbar-item">
            <button 
              className="navbar-link" 
              onClick={() => handleNavClick('inicio')}
            >
              Inicio
            </button>
          </li>

          <li className="navbar-item navbar-dropdown">
            <button 
              className="navbar-link navbar-dropdown-toggle"
              onClick={() => handleNavClick('inclusion')}
            >
              Inclusión
              <span 
                className="dropdown-arrow"
                onClick={(e) => toggleDropdown('inclusion', e)}
              >
                ▼
              </span>
            </button>
            <ul className={`navbar-submenu ${activeDropdown === 'inclusion' ? 'navbar-submenu-active' : ''}`}>
              <li>
                <button onClick={() => handleNavClick('inclusion')}>
                  Libro EBI
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('inclusion-recursos')}>
                  Recursos
                </button>
              </li>
            </ul>
          </li>

          <li className="navbar-item navbar-dropdown">
            <button 
              className="navbar-link navbar-dropdown-toggle"
              onClick={() => handleNavClick('ninos-adolescentes')}
            >
              Niños y Adolescentes
              <span 
                className="dropdown-arrow"
                onClick={(e) => toggleDropdown('ninos', e)}
              >
                ▼
              </span>
            </button>
            <ul className={`navbar-submenu ${activeDropdown === 'ninos' ? 'navbar-submenu-active' : ''}`}>
              <li>
                <button onClick={() => handleNavClick('ninos-recursos')}>
                  Recursos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('ninos-libros')}>
                  Libros
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('ninos-talleres')}>
                  Talleres y Capacitaciones
                </button>
              </li>
            </ul>
          </li>

          <li className="navbar-item navbar-dropdown">
            <button 
              className="navbar-link navbar-dropdown-toggle"
              onClick={() => handleNavClick('jovenes')}
            >
              Jóvenes
              <span 
                className="dropdown-arrow"
                onClick={(e) => toggleDropdown('jovenes', e)}
              >
                ▼
              </span>
            </button>
            <ul className={`navbar-submenu ${activeDropdown === 'jovenes' ? 'navbar-submenu-active' : ''}`}>
              <li>
                <button onClick={() => handleNavClick('jovenes-personajes')}>
                  Personajes Bíblicos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('jovenes-problematicas')}>
                  Problemáticas Actuales
                </button>
              </li>
            </ul>
          </li>

          <li className="navbar-item">
            <button 
              className="navbar-link" 
              onClick={() => handleNavClick('libros')}
            >
              Libros
            </button>
          </li>

          <li className="navbar-item">
            <button 
              className="navbar-link" 
              onClick={() => handleNavClick('contacto')}
            >
              Contacto
            </button>
          </li>
        </ul>

        <button 
          className={`navbar-hamburger ${isMenuOpen ? 'navbar-hamburger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;