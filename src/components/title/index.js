import './styles.css';

const Header = ({ children, className = '' }) => (
  <h1 className={`fixed ${className}`}>{children}</h1>
);

export default Header;
