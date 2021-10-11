import React from 'react';
import CreateItem from '../../components/CreateItem';
import Navigation from '../../components/routing/Navigation';

export const AddItemPage = () => (
  <div className="content-container">
    <h1 className="fixed title">Add Item</h1>
    <CreateItem />
    <Navigation />
  </div>
);
