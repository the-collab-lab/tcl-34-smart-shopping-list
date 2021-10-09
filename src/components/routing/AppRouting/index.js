import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddItemPage } from '../../../pages/AddItemPage';
import { ListPage } from '../../../pages/ListPage';

export function AppRouting() {
  return (
    <div>
      <Switch>
        <Route exact path="/list">
          <ListPage />
        </Route>
        <Route path="/addItem">
          <AddItemPage />
        </Route>
      </Switch>
    </div>
  );
}
