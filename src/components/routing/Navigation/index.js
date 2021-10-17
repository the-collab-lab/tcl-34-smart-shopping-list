import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function CustomLink({ children, to }) {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <Link className={`link ${match ? 'selected' : ''}`} to={to}>
      {children}
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="fixed navigation">
      <CustomLink to="/list"> List </CustomLink>
      <CustomLink to="/addItem"> Add Item </CustomLink>
    </nav>
  );
}

export default Navigation;
