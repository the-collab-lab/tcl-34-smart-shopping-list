import React from 'react';
import CreateItemButton from '../../components/create-item-button';
import Title from '../../components/title';
import ContentContainer from '../../components/content-container';

export const AddItemPage = () => (
  <>
    <Title>Add Item</Title>
    <ContentContainer>
      <CreateItemButton />
    </ContentContainer>
  </>
);
