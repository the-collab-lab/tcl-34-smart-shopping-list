import React from 'react';
import { CreateList } from '../../components/CreateList';

export const Welcome = () => (
  <div className="container">
    <h1>
      Welcome to your <br />
      Smart Shopping list!
    </h1>
    <CreateList />
  </div>
);
