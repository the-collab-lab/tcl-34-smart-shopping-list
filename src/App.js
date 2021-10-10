import React from 'react';
import './App.css';
import { AppRouting } from './components/routing/AppRouting';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/routing/Navigation';

function App() {
  return (
    <Router>
      <AppRouting />
      <Navigation />
    </Router>
  );
}

export default App;
