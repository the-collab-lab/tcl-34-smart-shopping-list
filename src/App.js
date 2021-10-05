import React from 'react';

import './App.css';

import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const Listar = () => <h1>Listar</h1>
const Adicionar = () => <h1>Adicionar</h1>

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/listar'>
        <Listar />
      </Route>
      <Route path='/adicionar'>
        <Adicionar />
      </Route>
    </Switch>
    <div className="div-button">
    <button className="button">
      <Link to='/listar'>
      Listar
    </Link>
    </button>
    <button className="button">
    <Link to='/adicionar'>
      Adicionar
    </Link>
    </button>
    </div>
    </BrowserRouter>
  )
}

export default App;
