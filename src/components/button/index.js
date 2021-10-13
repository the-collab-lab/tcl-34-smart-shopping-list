const Button = ({ type, disabled, onClick, children }) => (
  <button className="link" type={type} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export default Button;
