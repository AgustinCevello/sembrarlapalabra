import { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import { getDrivePreviewUrl, getDriveDownloadUrl } from '../../utils/driveHelpers';
import DescargaIcon from '../../assets/icons/DescargaLogo.png';
import './ResourceCard.css';

const ResourceCard = ({ titulo, descripcion, fileId, archivos, imagen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Si tiene múltiples archivos, el seleccionado empieza en el primero
  const tieneMultiples = archivos && archivos.length > 0;
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(
    tieneMultiples ? archivos[0] : null
  );

  // El fileId activo es el del archivo seleccionado, o el prop simple
  const activeFileId = tieneMultiples ? archivoSeleccionado.fileId : fileId;

  const handleDownload = () => {
    window.open(getDriveDownloadUrl(activeFileId), '_blank');
  };

  return (
    <>
      <div className="resource-card">
        {imagen && (
          <div className="resource-card-image">
            <img src={imagen} alt={titulo} />
          </div>
        )}
        <div className="resource-card-content">
          <h3 className="resource-card-title">{titulo}</h3>
          <p className="resource-card-description">{descripcion}</p>

          {/* Selector de grupo de edad (solo si hay múltiples archivos) */}
          {tieneMultiples && (
            <div className="resource-card-selector">
              {archivos.map((archivo) => (
                <button
                  key={archivo.fileId}
                  className={`selector-btn ${archivoSeleccionado.fileId === archivo.fileId ? 'selector-btn--active' : ''}`}
                  onClick={() => setArchivoSeleccionado(archivo)}
                >
                  {archivo.label}
                </button>
              ))}
            </div>
          )}

          <div className="resource-card-actions">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Ver más
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <img src={DescargaIcon} alt="Descargar" className="btn-icon-descarga" />
              Descargar
            </Button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={titulo}>

        {/* Si tiene múltiples, mostrar selector también dentro del modal */}
        {tieneMultiples && (
          <div className="resource-card-selector resource-card-selector--modal">
            {archivos.map((archivo) => (
              <button
                key={archivo.fileId}
                className={`selector-btn ${archivoSeleccionado.fileId === archivo.fileId ? 'selector-btn--active' : ''}`}
                onClick={() => setArchivoSeleccionado(archivo)}
              >
                {archivo.label}
              </button>
            ))}
          </div>
        )}

        <iframe
          src={getDrivePreviewUrl(activeFileId)}
          title={tieneMultiples ? archivoSeleccionado.label : titulo}
          allow="autoplay"
        />
        <div className="modal-actions">
          <Button variant="primary" onClick={handleDownload}>
            <img src={DescargaIcon} alt="Descargar" className="btn-icon-descarga" />
            Descargar PDF
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ResourceCard;