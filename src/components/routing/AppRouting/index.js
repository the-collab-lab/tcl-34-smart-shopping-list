import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Add } from '../../pages/AddItemPage';
import { List } from '../../pages/ListPage';

export function AppRouting() {
  return (
    <div>
      <Switch>
        <Route exact path="/list">
          <List />
        </Route>
        <Route path="/addItem">
          <Add />
        </Route>
      </Switch>
    </div>
  );
}
