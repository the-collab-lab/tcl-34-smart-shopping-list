const Button = ({
  type,
  disabled,
  onClick,
  className = 'link',
  children,
  ...rest
}) => (
  <button
    className={className}
    type={type}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
