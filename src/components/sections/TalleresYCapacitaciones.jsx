import { useState } from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { ninosData } from '../../data/ninosData';
import InstagramIcon from '../../assets/icons/InstagramLogo.webp';
import GmailIcon from '../../assets/icons/GmailLogo.webp';
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

  const renderCard = (item) => (
    <div key={item.id} className="taller-capacitacion-card">
      <div className="taller-capacitacion-image">
        <img src={item.foto} alt={item.titulo} />
      </div>
      <div className="taller-capacitacion-content">
        <h3 className="taller-capacitacion-title">{item.titulo}</h3>
        <p className="taller-capacitacion-description">{item.descripcion}</p>
        <div className="taller-capacitacion-buttons">
          {item.propuestaUrl && (
            <a
              href={item.propuestaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {item.propuestaLabel || "Propuesta de Taller"}
            </a>
          )}
          <Button 
            variant="primary" 
            onClick={() => openModal(item)}
          >
            Solicitar Taller
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="talleres-capacitaciones-section" id="talleres">
      <div className="container">
        <h2 className="section-title">Talleres y Capacitaciones</h2>

        <div className="talleres-capacitaciones-grid">
          {/* Talleres */}
          {ninosData.talleres.map((taller) => renderCard(taller))}

          {/* Capacitaciones */}
          {ninosData.capacitaciones.map((capacitacion) => renderCard(capacitacion))}
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