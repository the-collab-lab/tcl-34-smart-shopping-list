import React from 'react';
import './App.css';
import { Filters } from './components/Filters';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Filters />
      </div>
    </Router>
  );
}

export default App;
