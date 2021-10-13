import React from 'react';
import './App.css';
import { AppRouting } from './components/routing/AppRouting';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppRouting />
    </Router>
  );
}

export default App;
