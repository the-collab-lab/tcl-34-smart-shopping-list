import React from 'react';
import { useHistory } from 'react-router';
import Button from '../button';
import { useProducts } from '../../hooks/useProducts';
import ContentContainer from '../content-container';
import './styles.css';

export const ShowProducts = () => {
  const { products, loading } = useProducts();
  const { push } = useHistory();

  if (loading) {
    return (
      <ContentContainer>
        <p>Loading...</p>
      </ContentContainer>
    );
  }

  if (products.length === 0) {
    return (
      <ContentContainer>
        <p className="empty-shopping-list">
          Your shopping list is currently empty.
        </p>
        <Button onClick={() => push('/addItem')}>Add Item</Button>
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      <ul>
        {products.map(({ id, productName }) => (
          <li key={id}>{productName}</li>
        ))}
      </ul>
    </ContentContainer>
  );
};
