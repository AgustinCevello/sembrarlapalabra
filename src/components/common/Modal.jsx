import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { LuX } from 'react-icons/lu';
import './Modal.css';

/**
 * Modal con 3 secciones:
 * - Header fijo: título + botón cerrar
 * - Body scrollable: contenido principal
 * - Footer fijo: acciones
 * Se renderiza en un portal (document.body). En móvil se muestra como "bottom sheet".
 */
const Modal = ({ isOpen, onClose, children, title, footer }) => {
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.classList.add('no-scroll');
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          {title && <h3 className="modal-title">{title}</h3>}
          <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Cerrar">
            <LuX aria-hidden="true" />
          </button>
        </div>

        <div className="modal-body">{children}</div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
