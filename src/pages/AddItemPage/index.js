import React from 'react';
import CreateItem from '../../components/CreateItem';
import Navigation from '../../components/routing/Navigation';

export const AddItemPage = () => (
  <div className="container">
    <h1>Add Item</h1>
    <CreateItem />
    <Navigation />
  </div>
);
