import { LuLibrary, LuStar, LuBookMarked } from 'react-icons/lu';
import BookCard from '../common/BookCard';
import SectionHeader from '../common/SectionHeader';
import { librosDestacados, otrosLibros } from '../../data/librosData';
import './LibrosSugeridos.css';

const LibrosSugeridos = () => {
  return (
    <section className="libros-section" id="libros">
      <div className="container">
        <SectionHeader
          icon={LuLibrary}
          eyebrow="Biblioteca"
          title="Libros Sugeridos"
          intro="Una selección cuidadosa de recursos bibliográficos para fortalecer la enseñanza bíblica y el acompañamiento de niños, adolescentes y jóvenes."
        />

        {/* Libros Destacados */}
        <div className="libros-subsection">
          <div className="subsection-header reveal">
            <h3 className="subsection-title">
              <span className="subsection-title-icon">
                <LuStar aria-hidden="true" />
              </span>
              Libros Destacados
            </h3>
          </div>
          <div className="libros-destacados-grid">
            {librosDestacados.map((libro, i) => (
              <BookCard
                key={libro.id}
                index={i}
                titulo={libro.titulo}
                tapa={libro.tapa}
                descripcion={libro.descripcion}
                mercadoLibreUrl={libro.mercadoLibreUrl}
                enlaceExterno={libro.enlaceExterno}
              />
            ))}
          </div>
        </div>

        {/* Otros Libros Recomendados */}
        <div className="libros-subsection">
          <div className="subsection-header reveal">
            <h3 className="subsection-title">
              <span className="subsection-title-icon">
                <LuBookMarked aria-hidden="true" />
              </span>
              Otros Libros Recomendados
            </h3>
            <span className="subsection-count">{otrosLibros.length} títulos</span>
          </div>
          <div className="otros-libros-grid">
            {otrosLibros.map((libro, i) => (
              <BookCard
                key={libro.id}
                index={i}
                variant="compact"
                titulo={libro.titulo}
                autor={libro.autor}
                tapa={libro.tapa}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibrosSugeridos;
