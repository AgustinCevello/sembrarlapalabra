import { LuMessageCircleHeart, LuArrowRight, LuSprout, LuChevronDown } from 'react-icons/lu';
import useScrollTo from '../../hooks/useScrollTo';
import HeroImg from '../../assets/images/Variado/BannerHeroSection.webp';
import './Hero.css';

const Hero = () => {
  const scrollToSection = useScrollTo();
  const linkTo = (id) => ({
    href: `#${id}`,
    onClick: (e) => {
      e.preventDefault();
      scrollToSection(id);
    },
  });

  return (
    <section className="hero" id="inicio">
      <img
        src={HeroImg}
        alt="Ilustración de dos maestros caminando por un sendero entre niños y jóvenes que leen la Biblia"
        className="hero-bg"
        fetchPriority="high"
        decoding="async"
        width="1024"
        height="596"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <span className="hero-badge">
          <LuSprout aria-hidden="true" />
          Recursos para la enseñanza bíblica
        </span>

        <h1 className="hero-title">
          Sembrar <em>la</em> Palabra
        </h1>
        <p className="hero-subtitle-text">El sembrador salió a sembrar...</p>
        <p className="hero-description">
          Recursos para la enseñanza bíblica y crecimiento espiritual de niños, adolescentes y jóvenes
        </p>

        <div className="hero-buttons">
          <a {...linkTo('contacto')} className="hero-cta">
            <span className="hero-cta-icon">
              <LuMessageCircleHeart aria-hidden="true" />
            </span>
            <span className="hero-cta-label">Contactar</span>
            <LuArrowRight className="hero-cta-arrow" aria-hidden="true" />
          </a>

          <a {...linkTo('inclusion')} className="hero-secondary">
            Explorar recursos
          </a>
        </div>
      </div>

      <a {...linkTo('inclusion')} className="hero-scroll" aria-label="Ir a los recursos">
        <LuChevronDown aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
