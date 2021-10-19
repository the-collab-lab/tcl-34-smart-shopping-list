import React from 'react';
import { CreateList } from '../../components/CreateList';
import { JoinList } from '../../components/JoinList';

export const Welcome = () => (
  <div className="container">
    <h1>
      Welcome to your <br />
      Smart Shopping list!
    </h1>
    <CreateList />
    <p>Join an existing shopping list<br/>
    by entering a three word token.
    </p>
    <JoinList />
  </div>
);
