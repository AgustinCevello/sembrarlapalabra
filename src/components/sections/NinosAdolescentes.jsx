import ResourceCard from '../common/ResourceCard';
import BookCard from '../common/BookCard';
import { ninosData } from '../../data/ninosData';
import { recursosInclusionData } from '../../data/inclusionData';
import './NinosAdolescentes.css';

const NinosAdolescentes = () => {
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
      </div>
    </section>
  );
};

export default NinosAdolescentes;