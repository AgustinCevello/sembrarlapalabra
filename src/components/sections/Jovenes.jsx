import { useState } from 'react';
import ResourceCard from '../common/ResourceCard';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { jovenesData } from '../../data/jovenesData';
import { getDrivePreviewUrl, getDriveDownloadUrl } from '../../utils/driveHelpers';
import './Jovenes.css';

const Jovenes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { versiculo, personajesBiblicos, problematicasActuales } = jovenesData;

  const openProblematicasModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="jovenes-section" id="jovenes">
      <div className="container">
        <h2 className="section-title">Jóvenes</h2>

        {/* Versículo */}
        <div className="versiculo-card">
          <p className="versiculo-texto">"{versiculo.texto}"</p>
          <p className="versiculo-referencia">- {versiculo.referencia}</p>
        </div>

        {/* Personajes Bíblicos */}
        <div className="jovenes-subsection" id="jovenes-personajes">
          <h3 className="subsection-title">Ejemplos de Personajes Bíblicos</h3>
          <p className="subsection-description">
            Recursos para trabajar con jóvenes a través de ejemplos bíblicos inspiradores.
          </p>
          <div className="personajes-grid">
            {personajesBiblicos.map((personaje) => (
              <ResourceCard
                key={personaje.id}
                titulo={personaje.nombre}
                descripcion={personaje.descripcion}
                fileId={personaje.fileId}
              />
            ))}
          </div>
        </div>

        {/* Problemáticas Actuales */}
        <div className="jovenes-subsection problematicas-subsection" id="jovenes-problematicas">
          <h3 className="subsection-title">Problemáticas Actuales</h3>
          <div className="problematicas-card">
            <div className="problematicas-content">
              <h4>{problematicasActuales.titulo}</h4>
              <p>{problematicasActuales.descripcion}</p>
              <div className="problematicas-actions">
                <Button variant="primary" onClick={openProblematicasModal}>
                  Ver Documento
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.open(getDriveDownloadUrl(problematicasActuales.fileId), '_blank')}
                >
                  Descargar PDF
                </Button>
              </div>
            </div>
            <div className="problematicas-image">
              <div className="problematicas-icon">📚</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Problemáticas Actuales */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={problematicasActuales.titulo}
      >
        <iframe
          src={getDrivePreviewUrl(problematicasActuales.fileId)}
          title={problematicasActuales.titulo}
          allow="autoplay"
        />
        <div className="modal-actions">
          <Button 
            variant="primary" 
            onClick={() => window.open(getDriveDownloadUrl(problematicasActuales.fileId), '_blank')}
          >
            Descargar PDF
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default Jovenes;