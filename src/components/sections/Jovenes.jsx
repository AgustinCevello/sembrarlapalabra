import { useState } from 'react';
import ResourceCard from '../common/ResourceCard';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { jovenesData } from '../../data/jovenesData';
import { getDrivePreviewUrl, getDriveDownloadUrl } from '../../utils/driveHelpers';
import DescargaIcon from '../../assets/icons/DescargaLogo.png';
import './Jovenes.css';

const Jovenes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTema, setSelectedTema] = useState(null);
  const { versiculo, personajesBiblicos, problematicasActuales } = jovenesData;

  const openProblematicaModal = (tema) => {
    setSelectedTema(tema);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTema(null);
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
          <h3 className="subsection-title">{problematicasActuales.titulo}</h3>
          <p className="subsection-description">{problematicasActuales.descripcion}</p>
          
          <div className="problematicas-grid">
            {problematicasActuales.temas.map((tema) => (
              <div key={tema.id} className="problematica-card">
                <div className="problematica-icon">📚</div>
                <h4 className="problematica-nombre">{tema.nombre}</h4>
                <div className="problematica-actions">
                  <Button 
                    variant="primary" 
                    onClick={() => openProblematicaModal(tema)}
                  >
                    Ver Documento
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(getDriveDownloadUrl(tema.fileId), '_blank')}
                  >
                    <img src={DescargaIcon} alt="Descargar" className="btn-icon-descarga" />
                    Descargar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Problemáticas */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={selectedTema?.nombre}
      >
        {selectedTema && (
          <>
            <iframe
              src={getDrivePreviewUrl(selectedTema.fileId)}
              title={selectedTema.nombre}
              allow="autoplay"
            />
            <div className="modal-actions">
              <Button 
                variant="primary" 
                onClick={() => window.open(getDriveDownloadUrl(selectedTema.fileId), '_blank')}
              >
                <img src={DescargaIcon} alt="Descargar" className="btn-icon-descarga" />
                Descargar PDF
              </Button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Jovenes;