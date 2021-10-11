import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddItemPage } from '../../../pages/AddItem';
import { ListPage } from '../../../pages/List';
import { Welcome } from '../../../pages/Welcome';

export function AppRouting() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/list">
        <ListPage />
      </Route>
      <Route path="/addItem">
        <AddItemPage />
      </Route>
    </Switch>
  );
}
