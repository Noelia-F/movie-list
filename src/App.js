import React from 'react';
import './App.css';

import Home from './pages/home/Home';
import SearchResults from './pages/searchResults/SearchResults';

import { Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <Route component={Home} path="/"/>
      <Route
          path='/search/:keyword'
          component={SearchResults}/>
    </div>
  );
}

export default App;
