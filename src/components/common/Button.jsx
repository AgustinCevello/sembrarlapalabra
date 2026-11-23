import './Button.css';

/**
 * Botón reutilizable.
 * - variant: primary | secondary | outline | soft | ghost | light
 * - size: sm | md | lg
 * - icon / iconRight: componente de ícono (react-icons)
 * - href: si se pasa, se renderiza como <a> (enlace externo en nueva pestaña)
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  icon: Icon,
  iconRight: IconRight,
  href,
  external = true,
  block = false,
  ...rest
}) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    block ? 'btn-block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {Icon && <Icon className="btn-icon" aria-hidden="true" />}
      {children && <span className="btn-label">{children}</span>}
      {IconRight && <IconRight className="btn-icon btn-icon-right" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;
