import { useState } from 'react';
import ResourceCard from '../common/ResourceCard';
import BookCard from '../common/BookCard';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { ninosData } from '../../data/ninosData';
import { recursosInclusionData } from '../../data/inclusionData';
import './NinosAdolescentes.css';

const NinosAdolescentes = () => {
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
    <section className="ninos-section" id="ninos-adolescentes">
      <div className="container">
        <h2 className="section-title">Niños y Adolescentes</h2>

        {/* Recursos */}
        <div className="ninos-subsection" id="ninos-recursos">
          <h3 className="subsection-title">Recursos para Clases Bíblicas Inclusivas</h3>
          <div className="recursos-grid">
            {recursosInclusionData.map((recurso) => (
              <ResourceCard
                key={recurso.id}
                titulo={recurso.titulo}
                descripcion={recurso.descripcion}
                fileId={recurso.fileId}
              />
            ))}
          </div>
        </div>

        {/* Libros */}
        <div className="ninos-subsection" id="ninos-libros">
          <h3 className="subsection-title">Libros Recomendados</h3>
          <div className="libros-grid">
            {ninosData.libros.map((libro) => (
              <BookCard
                key={libro.id}
                titulo={libro.titulo}
                tapa={libro.tapa}
                descripcion={libro.resena}
                mercadoLibreUrl={libro.mercadoLibreUrl}
              />
            ))}
          </div>
        </div>

        {/* Talleres */}
        <div className="ninos-subsection talleres-section" id="ninos-talleres">
          <h3 className="subsection-title">Talleres y Capacitaciones</h3>
          <p className="talleres-intro">
            Ofrecemos talleres gratuitos para iglesias, escuelas y organizaciones. 
            Contáctanos para coordinar una capacitación en tu comunidad.
          </p>
          
          <div className="talleres-grid">
            {ninosData.talleres.map((taller) => (
              <div key={taller.id} className="taller-card">
                <div className="taller-image">
                  <img src={taller.foto} alt={taller.titulo} />
                </div>
                <div className="taller-content">
                  <h4 className="taller-title">{taller.titulo}</h4>
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
                  href="mailto:sembrarlapalabra@gmail.com?subject=Solicitud de Taller: {modalContent.titulo}"
                  className="contact-button"
                >
                  📧 sembrarlapalabra@gmail.com
                </a>
                <a 
                  href="https://www.instagram.com/sembrarlapalabra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <img 
                    src="/src/assets/icons/InstagramLogo.png" 
                    alt="Instagram"
                    className="contact-icon"
                  />
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

export default NinosAdolescentes;