import React from 'react';
import './styles.css';
import { Switch, Route, Link } from 'react-router-dom';

const List = () => <h1>List</h1>;
const Add = () => <h1>Add-item</h1>;

export function AppRouting() {
  return (
    <Switch>
      <Route exact path="/list">
        <List />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
 
    </Switch>
  );
}
