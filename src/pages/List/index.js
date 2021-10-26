import React from 'react';
import Header from '../../components/title';
import Navigation from '../../components/routing/Navigation';
import { ShowProducts } from '../../components/show-products';

export const ListPage = () => {
  return (
    <>
      <Header className="page-header">List</Header>
      <ShowProducts />
      <Navigation />
    </>
  );
};
