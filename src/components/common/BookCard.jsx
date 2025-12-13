import './BookCard.css';

const BookCard = ({ titulo, autor, tapa, descripcion, mercadoLibreUrl }) => {
  return (
    <div className="book-card">
      <div className="book-card-image">
        <img src={tapa} alt={titulo} />
      </div>
      <div className="book-card-content">
        <h3 className="book-card-title">{titulo}</h3>
        {autor && <p className="book-card-author">{autor}</p>}
        {descripcion && <p className="book-card-description">{descripcion}</p>}
        {mercadoLibreUrl && (
          <a 
            href={mercadoLibreUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="book-card-link"
          >
            <img 
              src="/src/assets/icons/MercadoLibreLogo.png" 
              alt="MercadoLibre" 
              className="ml-icon"
            />
            Comprar en MercadoLibre
          </a>
        )}
      </div>
    </div>
  );
};

export default BookCard;