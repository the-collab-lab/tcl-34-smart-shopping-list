import React from 'react';
import './App.css';
import { AppRouting } from './components/AppRouting';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRouting />
      </div>

      <nav className="navigation">
        
        <Link className="link-button" to="/list">
          List
        </Link>
      
      
        <Link className="link-button" to="/add">
          Add
        </Link>
      
    </nav>


    </Router>
  );
}

export default App;
