import { useState } from 'react';
import { LuFileText, LuEye, LuDownload } from 'react-icons/lu';
import Modal from './Modal';
import Button from './Button';
import { getDrivePreviewUrl, getDriveDownloadUrl } from '../../utils/driveHelpers';
import './ResourceCard.css';

const VersionSelector = ({ archivos, selected, onSelect, className = '' }) => (
  <div className={`resource-card-selector ${className}`} role="group" aria-label="Elegir versión">
    {archivos.map((archivo) => {
      const active = selected.fileId === archivo.fileId;
      return (
        <button
          key={archivo.fileId}
          type="button"
          className={`selector-btn ${active ? 'selector-btn--active' : ''}`}
          onClick={() => onSelect(archivo)}
          aria-pressed={active}
        >
          {archivo.label}
        </button>
      );
    })}
  </div>
);

const ResourceCard = ({ titulo, descripcion, fileId, archivos, imagen, icon: Icon = LuFileText, index = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tieneMultiples = archivos && archivos.length > 0;
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(tieneMultiples ? archivos[0] : null);

  const activeFileId = tieneMultiples ? archivoSeleccionado.fileId : fileId;

  const downloadUrl = getDriveDownloadUrl(activeFileId);

  return (
    <>
      <article className="resource-card reveal" style={{ '--reveal-delay': `${(index % 3) * 0.08}s` }}>
        {imagen && (
          <div className="resource-card-image">
            <img src={imagen} alt="" loading="lazy" decoding="async" />
          </div>
        )}

        <div className="resource-card-content">
          <div className="resource-card-top">
            <span className="resource-card-icon">
              {Icon && <Icon aria-hidden="true" />}
            </span>
            <span className="resource-card-tag">
              {tieneMultiples ? `${archivos.length} versiones` : 'PDF'}
            </span>
          </div>

          <h3 className="resource-card-title">{titulo}</h3>
          <p className="resource-card-description">{descripcion}</p>

          {tieneMultiples && (
            <VersionSelector
              archivos={archivos}
              selected={archivoSeleccionado}
              onSelect={setArchivoSeleccionado}
            />
          )}

          <div className="resource-card-actions">
            <Button variant="primary" size="sm" icon={LuEye} onClick={() => setIsModalOpen(true)}>
              Ver documento
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={LuDownload}
              href={downloadUrl}
              aria-label={`Descargar ${titulo} en PDF`}
              className="resource-card-download"
            >
              Descargar
            </Button>
          </div>
        </div>
      </article>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={titulo}
        footer={
          <Button variant="primary" icon={LuDownload} href={downloadUrl}>
            Descargar PDF
          </Button>
        }
      >
        {tieneMultiples && (
          <VersionSelector
            archivos={archivos}
            selected={archivoSeleccionado}
            onSelect={setArchivoSeleccionado}
            className="resource-card-selector--modal"
          />
        )}

        <iframe
          src={getDrivePreviewUrl(activeFileId)}
          title={tieneMultiples ? archivoSeleccionado.label : titulo}
          allow="autoplay"
          loading="lazy"
        />
      </Modal>
    </>
  );
};

export default ResourceCard;
