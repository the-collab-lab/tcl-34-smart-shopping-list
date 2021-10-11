import React from 'react';
import ItemsList from '../../components/items-list';
import Title from '../../components/title';
import ContentContainer from '../../components/content-container';

export const ListPage = () => (
  <>
    <Title>List</Title>
    <ContentContainer>
      <ItemsList />
    </ContentContainer>
  </>
);
