import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './styles.css';

function CustomLink({ children, to, disable }) {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <Link
      className={`link ${match ? 'selected' : ''} ${
        disable ? 'disable-link' : ''
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}

function Navigation({ disableList = false }) {
  return (
    <nav className="fixed navigation">
      <CustomLink to="/list" disable={disableList}>
        {' '}
        List{' '}
      </CustomLink>
      <CustomLink to="/addItem"> Add Item </CustomLink>
    </nav>
  );
}

export default Navigation;
