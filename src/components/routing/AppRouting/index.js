import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddItemPage } from '../../../pages/AddItemPage';
import { ListPage } from '../../../pages/ListPage';
import { CreateList } from '../../CreateList';

export function AppRouting() {
  return (
    <div>
      <Switch>
        <Route path="/list">
          <ListPage />
        </Route>
        <Route path="/addItem">
          <AddItemPage />
        </Route>
        <Route path="/">
          <CreateList />
        </Route>
      </Switch>
    </div>
  );
}
