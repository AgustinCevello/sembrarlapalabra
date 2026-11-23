import { LuSmile, LuBookHeart } from 'react-icons/lu';
import BookCard from '../common/BookCard';
import SectionHeader from '../common/SectionHeader';
import { ninosData } from '../../data/ninosData';
import './NinosAdolescentes.css';

const NinosAdolescentes = () => {
  return (
    <section className="ninos-section" id="ninos-adolescentes">
      <div className="container">
        <SectionHeader
          icon={LuSmile}
          eyebrow="Formación desde temprano"
          title="Niños y Adolescentes"
          intro="Lecturas para acompañar a los más chicos en la fe, desde la familia y la iglesia."
        />

        <div className="ninos-subsection" id="ninos-libros">
          <div className="subsection-header reveal">
            <h3 className="subsection-title">
              <span className="subsection-title-icon">
                <LuBookHeart aria-hidden="true" />
              </span>
              Libros Recomendados
            </h3>
          </div>

          <div className="libros-grid">
            {ninosData.libros.map((libro, i) => (
              <BookCard
                key={libro.id}
                index={i}
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
