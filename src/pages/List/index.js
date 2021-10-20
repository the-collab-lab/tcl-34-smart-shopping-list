import React from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../../components/title';
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

  return (
    <>
      <Title>List</Title>
      <ContentContainer>
        {loading ? <p>Loading...</p> : null}
        {!loading && error ? (
          <Button onClick={() => push('/')}>
            There was an error, try again
          </Button>
        ) : null}
        {!loading && !error ? showProducts() : null}
      </ContentContainer>
      {!loading && !error ? <Navigation /> : null}
    </>
  );
};
