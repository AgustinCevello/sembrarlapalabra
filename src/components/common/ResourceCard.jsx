import { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import { getDrivePreviewUrl, getDriveDownloadUrl } from '../../utils/driveHelpers';
import DescargaIcon from '../../assets/icons/DescargaLogo.png';
import OjoCerradoIcon from '../../assets/icons/OjoCerradoLogo.png';
import OjoAbiertoIcon from '../../assets/icons/OjoAbiertoLogo.png';
import './ResourceCard.css';

const ResourceCard = ({ titulo, descripcion, fileId, imagen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    window.open(getDriveDownloadUrl(fileId), '_blank');
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
          <div className="resource-card-actions">
            <Button 
              variant="primary" 
              onClick={handleOpenModal}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Ver más
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <img src={DescargaIcon} alt="Descargar" className="btn-icon-descarga" />
              Descargar
            </Button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={titulo}>
        <iframe
          src={getDrivePreviewUrl(fileId)}
          title={titulo}
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