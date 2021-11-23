import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiShoppingCart, FiPlus } from 'react-icons/fi';

import './styles.css';

function CustomLink({ children, to, ariaLabel }) {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <Link
      className={`navigation-link ${match ? 'selected' : ''}`}
      to={to}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="fixed navigation">
      <CustomLink to="/list" ariaLabel="This button open your shopping list.">
        <FiShoppingCart />
      </CustomLink>
      <CustomLink
        to="/addItem"
        ariaLabel="This button open the add product form."
      >
        <FiPlus />
      </CustomLink>
    </nav>
  );
}

export default Navigation;
