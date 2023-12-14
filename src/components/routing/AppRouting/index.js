import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { AddItemPage } from '../../../pages/AddItem';
import { ListPage } from '../../../pages/List';
import { Welcome } from '../../../pages/Welcome';
import { ArchivalNoticeModal } from '@the-collab-lab/shopping-list-utils';

const ProtectedRoute = ({ path, page }) => {
  const { storedValue } = useLocalStorage();

  return storedValue ? <Route path={path}>{page}</Route> : <Redirect to="/" />;
};

export function AppRouting() {
  return (
    <Switch>
      <Route exact path="/">
        <ArchivalNoticeModal />
        <Welcome />
      </Route>
      <ProtectedRoute path="/list" page={<ListPage />} />
      <ProtectedRoute path="/addItem" page={<AddItemPage />} />
    </Switch>
  );
}
