import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/title';
import ContentContainer from '../../components/content-container';
import Navigation from '../../components/routing/Navigation';
import Button from '../../components/button';
import { useProducts } from '../../hooks/useProducts';

export const ListPage = () => {
  const { products, loading, error } = useProducts();
  const { push } = useHistory();

  const showProducts = () => {
    if (products.length === 0) {
      return <p>You don't have any product in your list </p>;
    }

    return (
      <ul>
        {products.map(({ id, productName }) => (
          <li key={id}>{productName}</li>
        ))}
      </ul>
    );
  };

  if (loading) {
    return (
      <ContentContainer>
        <p>Loading...</p>
      </ContentContainer>
    );
  }

  if (error) {
    return (
      <ContentContainer>
        <p style={{ marginBottom: '20px' }}>There was an error</p>
        <Button onClick={() => push('/')}>Try again</Button>
      </ContentContainer>
    );
  }

  return (
    <>
      <Header className="page-header">List</Header>
      <ContentContainer>{showProducts()}</ContentContainer>
      <Navigation />
    </>
  );
};
