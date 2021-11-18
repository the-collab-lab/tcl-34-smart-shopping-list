import React from 'react';
import Navigation from '../../components/routing/Navigation';
import { ShowProducts } from '../../components/show-products';

import '../../components/show-products/styles.css';
import ContentContainer from '../../components/content-container';

export const ListPage = () => {
  return (
    <ContentContainer>
      <ShowProducts />
      <Navigation />
    </ContentContainer>
  );
};
