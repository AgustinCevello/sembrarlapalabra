import { useState } from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { ninosData } from '../../data/ninosData';
import InstagramIcon from '../../assets/icons/InstagramLogo.png';
import GmailIcon from '../../assets/icons/GmailLogo.png';
import './Capacitaciones.css';

const Capacitaciones = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openCapacitacionModal = (capacitacion) => {
    setModalContent(capacitacion);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section className="capacitaciones-section-main" id="capacitaciones">
      <div className="container">
        <h2 className="section-title">Capacitaciones</h2>
        <p className="section-intro">
          Escribinos para consultar disponibilidad de Capacitaciones Gratuitas. Usá nuestros canales de contacto.
        </p>

        <div className="capacitaciones-grid">
          {ninosData.capacitaciones.map((capacitacion) => (
            <div key={capacitacion.id} className="capacitacion-card">
              <div className="capacitacion-image">
                <img src={capacitacion.foto} alt={capacitacion.titulo} />
              </div>
              <div className="capacitacion-content">
                <h3 className="capacitacion-title">{capacitacion.titulo}</h3>
                <p className="capacitacion-description">{capacitacion.descripcion}</p>
                <Button 
                  variant="primary" 
                  onClick={() => openCapacitacionModal(capacitacion)}
                >
                  Solicitar Capacitación
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para Solicitar Capacitación */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={modalContent?.titulo}
      >
        {modalContent && (
          <div className="solicitar-capacitacion-form">
            <p className="modal-description">{modalContent.descripcion}</p>
            <div className="contact-info">
              <h4>Para solicitar esta capacitación, contáctanos:</h4>
              <div className="contact-methods">
                <a 
                  href={`mailto:sembrarlapalabra@gmail.com?subject=Solicitud de Capacitación: ${modalContent.titulo}`}
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

export default Capacitaciones;