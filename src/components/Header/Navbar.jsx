import { useState, useEffect } from 'react';
import useScrollTo from '../../hooks/useScrollTo';
import LogoImg from '../../assets/icons/ElSembradorLogo.webp';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const scrollToSection = useScrollTo();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (isMenuOpen && Math.abs(currentScrollY - lastScrollY) > 50) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
      
      if (!isMenuOpen) {
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = ['inicio', 'inclusion', 'ninos-adolescentes', 'jovenes', 'libros', 'talleres', 'contacto'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -70% 0px'
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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
              className={`navbar-link ${activeSection === 'inicio' ? 'navbar-link-active' : ''}`}
              onClick={() => handleNavClick('inicio')}
            >
              Inicio
            </button>
          </li>

          <li className="navbar-item navbar-dropdown">
            <button 
              className={`navbar-link navbar-dropdown-toggle ${activeSection === 'inclusion' ? 'navbar-link-active' : ''}`}
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
              className={`navbar-link navbar-dropdown-toggle ${activeSection === 'ninos-adolescentes' ? 'navbar-link-active' : ''}`}
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
                <button onClick={() => handleNavClick('ninos-libros')}>
                  Libros
                </button>
              </li>
            </ul>
          </li>

          <li className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === 'talleres' ? 'navbar-link-active' : ''}`}
              onClick={() => handleNavClick('talleres')}
            >
              Talleres
            </button>
          </li>

          <li className="navbar-item navbar-dropdown">
            <button 
              className={`navbar-link navbar-dropdown-toggle ${activeSection === 'jovenes' ? 'navbar-link-active' : ''}`}
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
              className={`navbar-link ${activeSection === 'libros' ? 'navbar-link-active' : ''}`}
              onClick={() => handleNavClick('libros')}
            >
              Libros
            </button>
          </li>

          <li className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === 'contacto' ? 'navbar-link-active' : ''}`}
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

      {isMenuOpen && (
        <div 
          className="navbar-overlay" 
          onClick={() => {
            setIsMenuOpen(false);
            setActiveDropdown(null);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;