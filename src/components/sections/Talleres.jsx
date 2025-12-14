import { useState } from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { ninosData } from '../../data/ninosData';
import InstagramIcon from '../../assets/icons/InstagramLogo.png';
import GmailIcon from '../../assets/icons/GmailLogo.png';
import './Talleres.css';

const Talleres = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openTallerModal = (taller) => {
    setModalContent(taller);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section className="talleres-section-main" id="talleres">
      <div className="container">
        <h2 className="section-title">Talleres</h2>
        <p className="section-intro">
          Escribinos para consultar disponibilidad de Talleres Gratuitos de Formación. Usá nuestros canales de contacto.
        </p>

        <div className="talleres-grid">
          {ninosData.talleres.map((taller) => (
            <div key={taller.id} className="taller-card">
              <div className="taller-image">
                <img src={taller.foto} alt={taller.titulo} />
              </div>
              <div className="taller-content">
                <h3 className="taller-title">{taller.titulo}</h3>
                <p className="taller-description">{taller.descripcion}</p>
                <Button 
                  variant="primary" 
                  onClick={() => openTallerModal(taller)}
                >
                  Solicitar Taller
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para Solicitar Taller */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={modalContent?.titulo}
      >
        {modalContent && (
          <div className="solicitar-taller-form">
            <p className="modal-description">{modalContent.descripcion}</p>
            <div className="contact-info">
              <h4>Para solicitar este taller, contáctanos:</h4>
              <div className="contact-methods">
                <a 
                  href={`mailto:sembrarlapalabra@gmail.com?subject=Solicitud de Taller: ${modalContent.titulo}`}
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

export default Talleres;