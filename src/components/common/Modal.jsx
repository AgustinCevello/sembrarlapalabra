import { useEffect } from 'react';
import './Modal.css';

/**
 * Modal rediseñado con arquitectura de 3 secciones:
 * - Header fijo: título + botón cerrar
 * - Body scrollable: contenido principal (iframe del documento)
 * - Footer fijo: acciones (botón Descargar PDF) siempre visible
 *
 * Props:
 *   - isOpen: controla visibilidad
 *   - onClose: callback para cerrar
 *   - title: texto del encabezado
 *   - children: contenido del body (iframe, selectores, etc.)
 *   - footer: contenido del footer (botones de acción)
 */
const Modal = ({ isOpen, onClose, children, title, footer }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* ── Header fijo ── */}
        <div className="modal-header">
          {title && <h3 className="modal-title">{title}</h3>}
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>

        {/* ── Body scrollable: solo esta sección tiene scroll ── */}
        <div className="modal-body">
          {children}
        </div>

        {/* ── Footer fijo: siempre visible al pie ── */}
        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;