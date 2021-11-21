import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiShoppingCart, FiPlus } from 'react-icons/fi';

import './styles.css';

function CustomLink({ children, to, disable }) {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <Link
      className={`navigation-link ${match ? 'selected' : ''} ${
        disable ? 'disable-link' : ''
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="fixed navigation">
      <CustomLink to="/list" aria-label="This button open your shopping list.">
        <FiShoppingCart />
      </CustomLink>
      <CustomLink
        to="/addItem"
        aria-label="This button open the add product form."
      >
        <FiPlus />
      </CustomLink>
    </nav>
  );
}

export default Navigation;
