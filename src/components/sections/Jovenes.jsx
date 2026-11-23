import { useState } from 'react';
import {
  LuUsers,
  LuBookMarked,
  LuMegaphone,
  LuEye,
  LuDownload,
  LuSparkles,
  LuCrown,
  LuKey,
  LuFish,
  LuShield,
  LuSmartphone,
} from 'react-icons/lu';
import ResourceCard from '../common/ResourceCard';
import Modal from '../common/Modal';
import Button from '../common/Button';
import SectionHeader from '../common/SectionHeader';
import { jovenesData } from '../../data/jovenesData';
import { getDrivePreviewUrl, getDriveDownloadUrl } from '../../utils/driveHelpers';
import './Jovenes.css';

// Ícono representativo para cada clase (por id)
const PERSONAJE_ICONS = {
  1: LuCrown, // Uzías
  2: LuKey, // José
  3: LuFish, // Pedro
  4: LuShield, // Daniel
  5: LuSparkles, // Santidad
  6: LuSmartphone, // Redes
};

const Jovenes = () => {
  const [selectedTema, setSelectedTema] = useState(null);
  const { versiculo, personajesBiblicos, problematicasActuales } = jovenesData;

  return (
    <section className="jovenes-section" id="jovenes">
      <div className="container">
        <SectionHeader
          icon={LuUsers}
          eyebrow="Fe con identidad"
          title="Jóvenes"
          intro="Clases y materiales para acompañar a los jóvenes con una mirada bíblica y actual."
        />

        {/* Versículo */}
        <figure className="versiculo-card reveal">
          <blockquote className="versiculo-texto">“{versiculo.texto}”</blockquote>
          <figcaption className="versiculo-referencia">{versiculo.referencia}</figcaption>
        </figure>

        {/* Clases para Jóvenes */}
        <div className="jovenes-subsection" id="jovenes-personajes">
          <div className="subsection-header reveal">
            <div>
              <h3 className="subsection-title">
                <span className="subsection-title-icon">
                  <LuBookMarked aria-hidden="true" />
                </span>
                Clases para Jóvenes
              </h3>
              <p className="subsection-description">
                Recursos para trabajar con jóvenes a través de ejemplos bíblicos inspiradores.
              </p>
            </div>
            <span className="subsection-count">{personajesBiblicos.length} clases</span>
          </div>

          <div className="personajes-grid">
            {personajesBiblicos.map((personaje, i) => (
              <ResourceCard
                key={personaje.id}
                index={i}
                icon={PERSONAJE_ICONS[personaje.id]}
                titulo={personaje.nombre}
                descripcion={personaje.descripcion}
                fileId={personaje.fileId}
                archivos={personaje.archivos}
              />
            ))}
          </div>
        </div>

        {/* Problemáticas Actuales */}
        <div className="jovenes-subsection" id="jovenes-problematicas">
          <div className="subsection-header reveal">
            <div>
              <h3 className="subsection-title">
                <span className="subsection-title-icon">
                  <LuMegaphone aria-hidden="true" />
                </span>
                {problematicasActuales.titulo}
              </h3>
              <p className="subsection-description">{problematicasActuales.descripcion}</p>
            </div>
            <span className="subsection-count">{problematicasActuales.temas.length} documentos</span>
          </div>

          <ul className="problematicas-grid">
            {problematicasActuales.temas.map((tema, i) => (
              <li
                key={tema.id}
                className="problematica-card reveal"
                style={{ '--reveal-delay': `${(i % 2) * 0.08}s` }}
              >
                <span className="problematica-icon-wrapper">
                  {typeof tema.icono === 'string' ? (
                    <img src={tema.icono} alt="" className="problematica-icon-img" loading="lazy" />
                  ) : (
                    <tema.icono className="problematica-icon-svg" aria-hidden="true" />
                  )}
                </span>

                <h4 className="problematica-nombre">{tema.nombre}</h4>

                <div className="problematica-actions">
                  <Button variant="primary" size="sm" icon={LuEye} onClick={() => setSelectedTema(tema)}>
                    Ver documento
                  </Button>
                  <a
                    href={getDriveDownloadUrl(tema.fileId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={`Descargar ${tema.nombre} en PDF`}
                    title="Descargar PDF"
                  >
                    <LuDownload aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal Problemáticas */}
      <Modal
        isOpen={Boolean(selectedTema)}
        onClose={() => setSelectedTema(null)}
        title={selectedTema?.nombre}
        footer={
          selectedTema && (
            <Button variant="primary" icon={LuDownload} href={getDriveDownloadUrl(selectedTema.fileId)}>
              Descargar PDF
            </Button>
          )
        }
      >
        {selectedTema && (
          <iframe src={getDrivePreviewUrl(selectedTema.fileId)} title={selectedTema.nombre} allow="autoplay" />
        )}
      </Modal>
    </section>
  );
};

export default Jovenes;
