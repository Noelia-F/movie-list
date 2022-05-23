import React from 'react';
import './App.css';

import Home from './pages/home/Home';

import { Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <Route component={Home} path="/"/>
    </div>
  );
}

export default App;
