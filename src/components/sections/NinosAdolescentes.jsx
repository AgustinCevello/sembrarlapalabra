import ResourceCard from '../common/ResourceCard';
import BookCard from '../common/BookCard';
import { ninosData } from '../../data/ninosData';
import './NinosAdolescentes.css';

const NinosAdolescentes = () => {
  return (
    <section className="ninos-section" id="ninos-adolescentes">
      <div className="container">
        <h2 className="section-title">Niños y Adolescentes</h2>

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