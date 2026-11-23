import { LuShoppingBag, LuExternalLink, LuArrowUpRight } from 'react-icons/lu';
import Button from './Button';
import './BookCard.css';

/**
 * Tarjeta de libro.
 * - variant "full": portada + título + descripción + acciones
 * - variant "compact": solo portada, título y autor (grilla densa)
 */
const BookCard = ({
  titulo,
  autor,
  tapa,
  descripcion,
  mercadoLibreUrl,
  enlaceExterno,
  variant = 'full',
  index = 0,
}) => {
  const hasActions = mercadoLibreUrl || enlaceExterno;

  return (
    <article
      className={`book-card book-card--${variant} reveal`}
      style={{ '--reveal-delay': `${(index % 4) * 0.07}s` }}
    >
      <div className="book-card-image">
        <img src={tapa} alt={`Tapa de ${titulo}`} loading="lazy" decoding="async" />
      </div>

      <div className="book-card-content">
        <h3 className="book-card-title">{titulo}</h3>
        {autor && <p className="book-card-author">{autor}</p>}
        {descripcion && <p className="book-card-description">{descripcion}</p>}

        {hasActions && (
          <div className="book-card-links">
            {mercadoLibreUrl && (
              <Button
                href={mercadoLibreUrl}
                variant="primary"
                size="sm"
                icon={LuShoppingBag}
                iconRight={LuArrowUpRight}
                block
                aria-label={`Comprar ${titulo} en Mercado Libre`}
              >
                Comprar
              </Button>
            )}

            {enlaceExterno && (
              <Button
                href={enlaceExterno.url}
                variant="secondary"
                size="sm"
                icon={LuExternalLink}
                block
              >
                {enlaceExterno.texto}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default BookCard;
