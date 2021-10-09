import React from 'react';
import './App.css';
import { AppRouting } from './components/routing/AppRouting';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/routing/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRouting />
      </div>
      <Navigation />
    </Router>
  );
}

export default App;
