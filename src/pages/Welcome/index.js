import React from 'react';
import { CreateList } from '../../components/create-list';
import { JoinList } from '../../components/join-list';
import Header from '../../components/title';
import shoppingWelcomeImage from './shopping-welcome-image.svg';

import './style.css';

export const Welcome = () => (
  <main className="welcome-container">
    <Header className="welcome-header">
      Welcome to your Smart Shopping List!
    </Header>
    <article className="welcome-content">
      <img
        className="shopping-cart-image"
        src={shoppingWelcomeImage}
        alt="person shopping with a shopping cart"
      />
      <div className="welcome-form">
        <CreateList />
        <p className="welcome-text center">- or -</p>
        <p className="welcome-text">
          Join an existing shopping list by entering a three word token.
        </p>
        <JoinList />
      </div>
    </article>
  </main>
);
