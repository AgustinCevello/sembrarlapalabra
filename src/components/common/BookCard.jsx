import MercadoLibreIcon from '../../assets/icons/MercadoLibreLogo.png';
import './BookCard.css';

const BookCard = ({ titulo, autor, tapa, descripcion, mercadoLibreUrl, enlaceExterno }) => {
  return (
    <div className="book-card">
      <div className="book-card-image">
        <img src={tapa} alt={titulo} />
      </div>
      <div className="book-card-content">
        <h3 className="book-card-title">{titulo}</h3>
        {autor && <p className="book-card-author">{autor}</p>}
        {descripcion && <p className="book-card-description">{descripcion}</p>}
        
        <div className="book-card-links">
          {mercadoLibreUrl && (
            <a 
              href={mercadoLibreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="book-card-link"
            >
              <img 
                src={MercadoLibreIcon}
                alt="MercadoLibre" 
                className="ml-icon-large"
              />
              Comprar
            </a>
          )}
          
          {enlaceExterno && (
            <a 
              href={enlaceExterno.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="book-card-link book-card-link-externo"
            >
              <img 
                src={enlaceExterno.icono}
                alt="Enlace externo" 
                className="enlace-icon"
              />
              {enlaceExterno.texto}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;