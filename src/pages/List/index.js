import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/title';
import ContentContainer from '../../components/content-container';
import Navigation from '../../components/routing/Navigation';
import Button from '../../components/button';
import { useList } from '../../hooks/useList';

export const ListPage = () => {
  const { list, loading, error } = useList();
  const { push } = useHistory();

  const showProducts = () => {
    if (list.length === 0) {
      return <p>You don't have any product in your list </p>;
    }

    return (
      <ul>
        {list.map(({ date, productName }) => (
          <li key={date}>{productName}</li>
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
