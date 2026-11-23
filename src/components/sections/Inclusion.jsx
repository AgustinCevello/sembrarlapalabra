import {
  LuHeartHandshake,
  LuBookOpen,
  LuShoppingBag,
  LuPlay,
  LuQuote,
  LuPenLine,
  LuFiles,
  LuTrafficCone,
  LuBrain,
  LuImage,
  LuLink,
  LuCalendarDays,
  LuPalette,
} from 'react-icons/lu';
import ResourceCard from '../common/ResourceCard';
import Button from '../common/Button';
import SectionHeader from '../common/SectionHeader';
import { inclusionData, recursosInclusionData } from '../../data/inclusionData';
import { getDrivePreviewUrl } from '../../utils/driveHelpers';
import './Inclusion.css';

// Ícono representativo para cada recurso (por id)
const RECURSO_ICONS = {
  1: LuTrafficCone,
  2: LuBrain,
  3: LuImage,
  4: LuLink,
  5: LuCalendarDays,
  6: LuPalette,
};

const Inclusion = () => {
  const { libro } = inclusionData;

  return (
    <section className="inclusion-section" id="inclusion">
      <div className="container">
        <SectionHeader
          icon={LuHeartHandshake}
          eyebrow="Enseñanza para todos"
          title="Inclusión"
          intro="Herramientas para que cada niño pueda participar, comprender y crecer en la fe dentro de la clase bíblica."
        />

        {/* Libro Principal */}
        <div className="libro-destacado reveal">
          <div className="libro-destacado-image">
            <div className="libro-destacado-blob" aria-hidden="true" />
            <img src={libro.tapa} alt={`Tapa de ${libro.titulo}`} loading="lazy" decoding="async" />
          </div>

          <div className="libro-destacado-content">
            <span className="libro-destacado-eyebrow">Libro destacado</span>
            <h3 className="libro-destacado-title">{libro.titulo}</h3>

            <div className="libro-destacado-info">
              <span className="libro-destacado-info-icon">
                <LuQuote aria-hidden="true" />
              </span>
              <div>
                <h4>Reseña</h4>
                <p>{libro.resena}</p>
              </div>
            </div>

            <div className="libro-destacado-info">
              <span className="libro-destacado-info-icon">
                <LuPenLine aria-hidden="true" />
              </span>
              <div>
                <h4>Sobre la Autora</h4>
                <p>{libro.sobreLaAutora}</p>
              </div>
            </div>

            <div className="libro-destacado-actions">
              <Button
                variant="primary"
                icon={LuBookOpen}
                href={getDrivePreviewUrl(libro.capitulosMuestra.fileId)}
              >
                Ver Capítulos de Muestra
              </Button>
              <Button variant="secondary" icon={LuShoppingBag} href={libro.mercadoLibreUrl}>
                Comprar
              </Button>
              <Button
                variant="outline"
                icon={LuPlay}
                href="https://www.instagram.com/reel/DUqGJxVEZqJ/?igsh=MTZiMTJoYXRsM2h6eQ%3D%3D"
              >
                Ver entrevista
              </Button>
            </div>
          </div>
        </div>

        {/* Recursos para Inclusión */}
        <div className="recursos-inclusion" id="inclusion-recursos">
          <div className="subsection-header reveal">
            <div>
              <h3 className="subsection-title">
                <span className="subsection-title-icon">
                  <LuFiles aria-hidden="true" />
                </span>
                Recursos para Clases Bíblicas Inclusivas
              </h3>
            </div>
            <span className="subsection-count">{recursosInclusionData.length} recursos descargables</span>
          </div>

          <div className="recursos-grid">
            {recursosInclusionData.map((recurso, i) => (
              <ResourceCard
                key={recurso.id}
                index={i}
                icon={RECURSO_ICONS[recurso.id]}
                titulo={recurso.titulo}
                descripcion={recurso.descripcion}
                fileId={recurso.fileId}
                archivos={recurso.archivos}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inclusion;
