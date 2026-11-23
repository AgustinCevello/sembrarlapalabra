/**
 * Encabezado de sección reutilizable: etiqueta con ícono + título + intro.
 */
const SectionHeader = ({ icon: Icon, eyebrow, title, intro }) => (
  <header className="section-header reveal">
    {eyebrow && (
      <span className="section-eyebrow">
        {Icon && <Icon aria-hidden="true" />}
        {eyebrow}
      </span>
    )}
    <h2 className="section-title">{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </header>
);

export default SectionHeader;
