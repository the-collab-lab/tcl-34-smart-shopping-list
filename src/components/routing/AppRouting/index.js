import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddItemPage } from '../../../pages/AddItemPage';
import { ListPage } from '../../../pages/ListPage';
import { Welcome } from '../../../pages/Welcome';

export function AppRouting() {
  return (
    <div>
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
    </div>
  );
}
