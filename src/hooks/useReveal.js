import { useEffect } from 'react';

/**
 * Activa la animación de aparición para todos los elementos `.reveal`.
 * Usa un único IntersectionObserver (liviano) y deja de observar
 * cada elemento una vez que se mostró.
 */
const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useReveal;
