import { useState } from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { ninosData } from '../../data/ninosData';
import InstagramIcon from '../../assets/icons/InstagramLogo.png';
import GmailIcon from '../../assets/icons/GmailLogo.png';
import './TalleresYCapacitaciones.css';

const TalleresYCapacitaciones = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section className="talleres-capacitaciones-section" id="talleres">
      <div className="container">
        <h2 className="section-title">Talleres y Capacitaciones</h2>
        <p className="section-intro">
          Ofrecemos talleres gratuitos para iglesias, escuelas y organizaciones. Contáctanos para coordinar una capacitación en tu comunidad.
        </p>

        <div className="talleres-capacitaciones-grid">
          {/* Talleres */}
          {ninosData.talleres.map((taller) => (
            <div key={taller.id} className="taller-capacitacion-card">
              <div className="taller-capacitacion-image">
                <img src={taller.foto} alt={taller.titulo} />
              </div>
              <div className="taller-capacitacion-content">
                <h3 className="taller-capacitacion-title">{taller.titulo}</h3>
                <p className="taller-capacitacion-description">{taller.descripcion}</p>
                <Button 
                  variant="primary" 
                  onClick={() => openModal(taller)}
                >
                  Solicitar Taller
                </Button>
              </div>
            </div>
          ))}

          {/* Capacitaciones */}
          {ninosData.capacitaciones.map((capacitacion) => (
            <div key={capacitacion.id} className="taller-capacitacion-card">
              <div className="taller-capacitacion-image">
                <img src={capacitacion.foto} alt={capacitacion.titulo} />
              </div>
              <div className="taller-capacitacion-content">
                <h3 className="taller-capacitacion-title">{capacitacion.titulo}</h3>
                <p className="taller-capacitacion-description">{capacitacion.descripcion}</p>
                <Button 
                  variant="primary" 
                  onClick={() => openModal(capacitacion)}
                >
                  Solicitar Taller
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para Solicitar */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={modalContent?.titulo}
      >
        {modalContent && (
          <div className="solicitar-form">
            <p className="modal-description">{modalContent.descripcion}</p>
            <div className="contact-info">
              <h4>Para solicitar, contáctanos:</h4>
              <div className="contact-methods">
                <a 
                  href={`mailto:sembrarlapalabra@gmail.com?subject=Solicitud: ${modalContent.titulo}`}
                  className="contact-button"
                >
                  <img src={GmailIcon} alt="Gmail" className="contact-icon" />
                  sembrarlapalabra@gmail.com
                </a>
                <a 
                  href="https://www.instagram.com/sembrarlapalabra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <img src={InstagramIcon} alt="Instagram" className="contact-icon" />
                  @sembrarlapalabra
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