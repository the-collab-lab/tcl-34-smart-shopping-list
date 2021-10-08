import React from 'react';
import './styles.css';
import { Switch, Route, Link } from 'react-router-dom';

const List = () => <h1>List</h1>;
const Add = () => <h1>Add-item</h1>;

export function Filters() {
  return (
    <Switch>
      <Route exact path="/list">
        <List />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
      <div className="div-button">
        
          <Link className="link-button" to="/list">
            List
          </Link>
        
        
          <Link className="link-button" to="/add">
            Add
          </Link>
        
      </div>
    </Switch>
  );
}
