import { useState } from 'react';
import { LuPresentation, LuFileText, LuSend, LuMail, LuArrowUpRight, LuGraduationCap, LuUsers } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa6';
import Button from '../common/Button';
import Modal from '../common/Modal';
import SectionHeader from '../common/SectionHeader';
import { ninosData } from '../../data/ninosData';
import { contactData } from '../../data/contactData';
import './TalleresYCapacitaciones.css';

const TallerCard = ({ item, index, onSolicitar }) => {
  const [expanded, setExpanded] = useState(false);
  const esCapacitacion = item.tipo === 'capacitacion';
  const TipoIcon = esCapacitacion ? LuGraduationCap : LuUsers;

  return (
    <article className="taller-card reveal" style={{ '--reveal-delay': `${(index % 2) * 0.1}s` }}>
      <div className="taller-card-image">
        <img src={item.foto} alt={item.titulo} loading="lazy" decoding="async" />
        <span className={`taller-card-badge ${esCapacitacion ? 'is-capacitacion' : ''}`}>
          <TipoIcon aria-hidden="true" />
          {esCapacitacion ? 'Capacitación' : 'Taller'}
        </span>
      </div>

      <div className="taller-card-content">
        <h3 className="taller-card-title">{item.titulo}</h3>
        <p className={`taller-card-description ${expanded ? 'is-expanded' : ''}`}>{item.descripcion}</p>
        <button
          type="button"
          className="taller-card-more"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Leer menos' : 'Leer más'}
        </button>

        <div className="taller-card-buttons">
          {item.propuestaUrl && (
            <Button href={item.propuestaUrl} variant="outline" icon={LuFileText}>
              {item.propuestaLabel || 'Propuesta de Taller'}
            </Button>
          )}
          <Button variant="primary" icon={LuSend} onClick={() => onSolicitar(item)}>
            Solicitar Taller
          </Button>
        </div>
      </div>
    </article>
  );
};

const TalleresYCapacitaciones = () => {
  const [modalContent, setModalContent] = useState(null);
  const items = [...ninosData.talleres, ...ninosData.capacitaciones];

  return (
    <section className="talleres-capacitaciones-section" id="talleres">
      <div className="container">
        <SectionHeader
          icon={LuPresentation}
          eyebrow="Formación presencial"
          title="Talleres y Capacitaciones"
          intro="Espacios prácticos para iglesias, líderes, maestros y familias. Podés solicitarlos para tu comunidad."
        />

        <div className="talleres-capacitaciones-grid">
          {items.map((item, i) => (
            <TallerCard key={item.id} item={item} index={i} onSolicitar={setModalContent} />
          ))}
        </div>
      </div>

      <Modal isOpen={Boolean(modalContent)} onClose={() => setModalContent(null)} title={modalContent?.titulo}>
        {modalContent && (
          <div className="solicitar-form">
            <p className="modal-description">{modalContent.descripcion}</p>
            <div className="contact-info">
              <h4>Para solicitarlo, escribinos:</h4>
              <div className="contact-methods">
                <a
                  href={`mailto:${contactData.email}?subject=${encodeURIComponent(`Solicitud: ${modalContent.titulo}`)}`}
                  className="contact-button"
                >
                  <span className="contact-button-icon is-mail">
                    <LuMail aria-hidden="true" />
                  </span>
                  <span className="contact-button-text">
                    <strong>Email</strong>
                    {contactData.email}
                  </span>
                  <LuArrowUpRight className="contact-button-arrow" aria-hidden="true" />
                </a>
                <a
                  href={contactData.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <span className="contact-button-icon is-ig">
                    <FaInstagram aria-hidden="true" />
                  </span>
                  <span className="contact-button-text">
                    <strong>Instagram</strong>
                    {contactData.instagram.handle}
                  </span>
                  <LuArrowUpRight className="contact-button-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TalleresYCapacitaciones;
