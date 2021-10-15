const Button = ({ type, disabled, onClick, className = 'link', children }) => (
  <button
    className={className}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
