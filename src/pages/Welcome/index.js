import React from 'react';
import { CreateList } from '../../components/create-list';
import { JoinList } from '../../components/join-list';
import ContentContainer from '../../components/content-container';
import Header from '../../components/title';

import './style.css';

export const Welcome = () => (
  <ContentContainer>
    <Header className="welcome-header">
      Welcome to your <br />
      Smart Shopping list!
    </Header>
    <div className="welcome-form">
      <CreateList />
      <p className="welcome-text center">- or -</p>
      <p className="welcome-text">
        Join an existing shopping list
        <br />
        by entering a three word token.
      </p>
      <JoinList />
    </div>
  </ContentContainer>
);
