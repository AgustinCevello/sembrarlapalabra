import BookCard from '../common/BookCard';
import { librosDestacados, otrosLibros } from '../../data/librosData';
import './LibrosSugeridos.css';

const LibrosSugeridos = () => {
  return (
    <section className="libros-section" id="libros">
      <div className="container">
        <h2 className="section-title">Libros Sugeridos</h2>
        <p className="section-intro">
          Una selección cuidadosa de recursos bibliográficos para fortalecer 
          la enseñanza bíblica y el acompañamiento de niños, adolescentes y jóvenes.
        </p>

        {/* Libros Destacados */}
        <div className="libros-subsection">
          <h3 className="subsection-title">Libros Destacados</h3>
          <div className="libros-destacados-grid">
            {librosDestacados.map((libro) => (
              <BookCard
                key={libro.id}
                titulo={libro.titulo}
                tapa={libro.tapa}
                descripcion={libro.descripcion}
                mercadoLibreUrl={libro.mercadoLibreUrl}
              />
            ))}
          </div>
        </div>

        {/* Otros Libros Recomendados */}
        <div className="libros-subsection">
          <h3 className="subsection-title">Otros Libros Recomendados</h3>
          <div className="otros-libros-grid">
            {otrosLibros.map((libro) => (
              <BookCard
                key={libro.id}
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