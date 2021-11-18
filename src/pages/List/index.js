import React from 'react';
import Navigation from '../../components/routing/Navigation';
import { ShowProducts } from '../../components/show-products';

import '../../components/show-products/styles.css';
import ContentContainer from '../../components/content-container';

import Image from '../shopping-add-image.svg';

import '../pages-styles.css';

export const ListPage = () => {
  return (
    <div className="page-container">
      <div className="image-container">
        <img src={Image} alt="Shopping" width="80%" />
      </div>
      <div className="card-container">
        <ContentContainer>
          <ShowProducts />
          <Navigation />
        </ContentContainer>
      </div>
    </div>
  );
};
