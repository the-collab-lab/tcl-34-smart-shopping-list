import React from 'react';
import ListItem from '../../components/ListItem';
import Navigation from '../../components/routing/Navigation';

export const ListPage = () => (
  <div className="content-container">
    <h1 className="fixed title">List</h1>
    <ListItem />
    <Navigation />
  </div>
);
