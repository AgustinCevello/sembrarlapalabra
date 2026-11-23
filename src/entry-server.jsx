import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

/**
 * Renderiza la app a HTML en el build (prerenderizado).
 * Así buscadores y redes sociales reciben el contenido completo
 * sin depender de ejecutar JavaScript.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
