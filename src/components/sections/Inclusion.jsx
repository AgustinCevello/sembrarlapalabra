import ResourceCard from '../common/ResourceCard';
import Button from '../common/Button';
import { inclusionData, recursosInclusionData } from '../../data/inclusionData';
import MercadoLibreIcon from '../../assets/icons/MercadoLibreLogo.png';
import DescargaIcon from '../../assets/icons/DescargaLogo.png';
import { getDrivePreviewUrl } from '../../utils/driveHelpers';
import './Inclusion.css';

const Inclusion = () => {
  const { libro } = inclusionData;

  return (
    <section className="inclusion-section" id="inclusion">
      <div className="container">
        <h2 className="section-title">Inclusión</h2>
        
        {/* Libro Principal */}
        <div className="libro-destacado">
          <div className="libro-destacado-image">
            <img src={libro.tapa} alt={libro.titulo} />
          </div>
          <div className="libro-destacado-content">
            <h3 className="libro-destacado-title">{libro.titulo}</h3>
            
            <div className="libro-destacado-info">
              <h4>Reseña</h4>
              <p>{libro.resena}</p>
            </div>

            <div className="libro-destacado-info">
              <h4>Sobre la Autora</h4>
              <p>{libro.sobreLaAutora}</p>
            </div>

            <div className="libro-destacado-actions">
              <Button 
                variant="primary"
                onClick={() => window.open(getDrivePreviewUrl(libro.capitulosMuestra.fileId), '_blank')}
              >
                Ver Capítulos de Muestra
              </Button>
              <Button 
                variant="secondary"
                onClick={() => window.open(libro.mercadoLibreUrl, '_blank')}
              >
                <img 
                  src={MercadoLibreIcon}
                  alt="MercadoLibre" 
                  className="btn-icon-ml"
                />
                Comprar
              </Button>
            </div>
          </div>
        </div>

        {/* Recursos para Inclusión */}
        <div className="recursos-inclusion" id="inclusion-recursos">
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
      </div>
    </section>
  );
};

export default Inclusion;