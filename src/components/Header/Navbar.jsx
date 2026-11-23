import { useState, useEffect, useCallback } from 'react';
import {
  LuHouse,
  LuHeartHandshake,
  LuBookOpen,
  LuFiles,
  LuSmile,
  LuBookHeart,
  LuPresentation,
  LuUsers,
  LuBookMarked,
  LuMegaphone,
  LuLibrary,
  LuChevronDown,
  LuX,
  LuMessageCircleHeart,
  LuMail,
  LuArrowRight,
} from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa6';
import useScrollTo from '../../hooks/useScrollTo';
import { contactData } from '../../data/contactData';
import LogoImg from '../../assets/icons/ElSembradorLogo.webp';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', icon: LuHouse },
  {
    id: 'inclusion',
    label: 'Inclusión',
    icon: LuHeartHandshake,
    children: [
      { id: 'inclusion', label: 'Libro EBI', icon: LuBookOpen },
      { id: 'inclusion-recursos', label: 'Recursos', icon: LuFiles },
    ],
  },
  {
    id: 'ninos-adolescentes',
    label: 'Niños y Adolescentes',
    icon: LuSmile,
    children: [{ id: 'ninos-libros', label: 'Libros', icon: LuBookHeart }],
  },
  { id: 'talleres', label: 'Talleres', icon: LuPresentation },
  {
    id: 'jovenes',
    label: 'Jóvenes',
    icon: LuUsers,
    children: [
      { id: 'jovenes-personajes', label: 'Personajes Bíblicos', icon: LuBookMarked },
      { id: 'jovenes-problematicas', label: 'Problemáticas Actuales', icon: LuMegaphone },
    ],
  },
  { id: 'libros', label: 'Libros', icon: LuLibrary },
];

const SECTION_IDS = ['inicio', 'inclusion', 'ninos-adolescentes', 'jovenes', 'libros', 'talleres', 'contacto'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const scrollToSection = useScrollTo();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setOpenAccordion(null);
  }, []);

  // Estado "scrolled" (sombra + fondo más opaco)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resaltado de la sección activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Bloquear scroll del body + cerrar con Escape mientras el menú móvil está abierto
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    document.body.classList.add('no-scroll');
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    const onResize = () => {
      if (window.innerWidth > 1080) closeMenu();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [isMenuOpen, closeMenu]);

  const handleNavClick = (sectionId) => {
    closeMenu();
    // Esperar un frame para que el body recupere el scroll antes de desplazarse
    requestAnimationFrame(() => scrollToSection(sectionId));
  };

  // Props para enlaces internos rastreables (<a href="#seccion">) con scroll suave
  const linkTo = (sectionId) => ({
    href: `#${sectionId}`,
    onClick: (e) => {
      e.preventDefault();
      handleNavClick(sectionId);
    },
  });

  const isActive = (item) =>
    activeSection === item.id || item.children?.some((c) => c.id === activeSection);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <nav className="navbar-container" aria-label="Navegación principal">
          <a {...linkTo('inicio')} className="navbar-brand" aria-label="Sembrar la Palabra, ir al inicio">
            <img src={LogoImg} alt="" width="44" height="44" className="navbar-logo" />
            <span className="navbar-brand-text">
              Sembrar <em>la</em> Palabra
            </span>
          </a>

          {/* ── Menú de escritorio ── */}
          <ul className="navbar-menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className={`navbar-item ${item.children ? 'has-dropdown' : ''}`}>
                <a
                  {...linkTo(item.id)}
                  className={`navbar-link ${isActive(item) ? 'is-active' : ''}`}
                  aria-current={isActive(item) ? 'true' : undefined}
                >
                  {item.label}
                  {item.children && <LuChevronDown className="navbar-caret" aria-hidden="true" />}
                </a>

                {item.children && (
                  <ul className="navbar-dropdown">
                    {item.children.map((child) => (
                      <li key={child.id + child.label}>
                        <a {...linkTo(child.id)}>
                          <span className="navbar-dropdown-icon">
                            <child.icon aria-hidden="true" />
                          </span>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a {...linkTo('contacto')} className={`navbar-cta ${activeSection === 'contacto' ? 'is-active' : ''}`}>
            <LuMessageCircleHeart aria-hidden="true" />
            Contacto
          </a>

          {/* ── Botón hamburguesa ── */}
          <button
            type="button"
            className={`navbar-hamburger ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* ── Menú móvil (drawer): fuera del header para que `position: fixed`
          no quede atrapado por el backdrop-filter del navbar ── */}
      <div
        className={`mobile-overlay ${isMenuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        className={`mobile-drawer ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Menú"
        inert={!isMenuOpen}
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Menú</span>
          <button type="button" className="mobile-drawer-close" onClick={closeMenu} aria-label="Cerrar menú">
            <LuX aria-hidden="true" />
          </button>
        </div>

        <ul className="mobile-menu">
          {NAV_ITEMS.map((item, i) => {
            const expanded = openAccordion === item.id;
            return (
              <li key={item.id} className="mobile-item" style={{ '--i': i }}>
                <div className="mobile-row">
                  <a {...linkTo(item.id)} className={`mobile-link ${isActive(item) ? 'is-active' : ''}`}>
                    <span className="mobile-link-icon">
                      <item.icon aria-hidden="true" />
                    </span>
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      type="button"
                      className={`mobile-toggle ${expanded ? 'is-open' : ''}`}
                      onClick={() => setOpenAccordion(expanded ? null : item.id)}
                      aria-expanded={expanded}
                      aria-label={`${expanded ? 'Ocultar' : 'Mostrar'} subsecciones de ${item.label}`}
                    >
                      <LuChevronDown aria-hidden="true" />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div className={`mobile-submenu ${expanded ? 'is-open' : ''}`}>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.id + child.label}>
                          <a {...linkTo(child.id)} tabIndex={expanded ? 0 : -1}>
                            <child.icon aria-hidden="true" />
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <a {...linkTo('contacto')} className="mobile-cta">
            <LuMessageCircleHeart aria-hidden="true" />
            Contactar
            <LuArrowRight className="mobile-cta-arrow" aria-hidden="true" />
          </a>
          <div className="mobile-social">
            <a href={`mailto:${contactData.email}`} aria-label="Enviar email">
              <LuMail aria-hidden="true" />
            </a>
            <a href={contactData.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
