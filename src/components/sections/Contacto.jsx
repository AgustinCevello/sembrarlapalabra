import { LuMessageCircleHeart, LuMail, LuArrowUpRight, LuCheck, LuSprout, LuSend } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { contactData } from '../../data/contactData';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto-section" id="contacto">
      <div className="container">
        <SectionHeader
          icon={LuMessageCircleHeart}
          eyebrow="Hablemos"
          title="Contacto"
          intro="¿Tienes preguntas o deseas solicitar talleres? ¡Nos encantaría escucharte!"
        />

        <div className="contacto-panel reveal">
          {/* Información de Contacto */}
          <div className="contacto-col">
            <h3 className="contacto-col-title">Información de Contacto</h3>

            <a href={`mailto:${contactData.email}`} className="contacto-link">
              <span className="contacto-link-icon is-mail">
                <LuMail aria-hidden="true" />
              </span>
              <span className="contacto-link-text">
                <span className="contacto-link-label">Email</span>
                <span className="contacto-link-value">{contactData.email}</span>
              </span>
              <LuArrowUpRight className="contacto-link-arrow" aria-hidden="true" />
            </a>

            <a
              href={contactData.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              <span className="contacto-link-icon is-ig">
                <FaInstagram aria-hidden="true" />
              </span>
              <span className="contacto-link-text">
                <span className="contacto-link-label">Instagram</span>
                <span className="contacto-link-value">{contactData.instagram.handle}</span>
              </span>
              <LuArrowUpRight className="contacto-link-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Talleres */}
          <div className="contacto-col contacto-col--talleres">
            <h3 className="contacto-col-title">{contactData.talleres.titulo}</h3>
            <p className="contacto-talleres-text">{contactData.talleres.descripcion}</p>
            <ul className="talleres-list">
              {contactData.talleres.tipos.map((tipo) => (
                <li key={tipo}>
                  <span className="talleres-list-check">
                    <LuCheck aria-hidden="true" />
                  </span>
                  {tipo}
                </li>
              ))}
            </ul>
            <Button
              href={`mailto:${contactData.email}?subject=${encodeURIComponent('Consulta por talleres')}`}
              external={false}
              variant="primary"
              size="lg"
              icon={LuSend}
              className="contacto-cta"
            >
              Escribinos
            </Button>
          </div>
        </div>

        {/* Misión */}
        <div className="mision-section reveal">
          <span className="mision-icon">
            <LuSprout aria-hidden="true" />
          </span>
          <h3 className="mision-title">Nuestra Misión</h3>
          <p className="mision-text">
            Proveer herramientas para iglesias, líderes, maestros y padres, para el evangelismo y crecimiento
            espiritual de niños, adolescentes y jóvenes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
