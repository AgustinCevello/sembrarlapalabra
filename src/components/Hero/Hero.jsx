import useScrollTo from '../../hooks/useScrollTo';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  const scrollToSection = useScrollTo();

  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Sembrar La Palabra...
          <span className="hero-subtitle">...salió a sembrar</span>
        </h1>
        <p className="hero-description">
          Recursos para la enseñanza bíblica y crecimiento espiritual de niños, adolescentes y jóvenes
        </p>
        <div className="hero-buttons">
          <Button variant="primary" onClick={() => scrollToSection('inclusion')}>
            Explorar Recursos
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contacto')}>
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;