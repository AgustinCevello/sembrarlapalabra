import { useCallback } from 'react';

/**
 * Hook personalizado para navegación suave a secciones.
 * El desfase del navbar lo resuelve `scroll-padding-top` en el CSS global.
 */
const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }, []);

  return scrollToSection;
};

export default useScrollTo;
