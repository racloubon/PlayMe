import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SearchPage from './components/SearchPage';
import SongPage from './components/SongPage';

const App = () => {
  return (
    <div className="App">
      <h1>Play Me</h1>
      <Router>
        <Route
          path="/"
          exact component={SearchPage} />
        <Route
          path="/song/:id"
          component={SongPage} />
      </Router>
    </div>
  );
}

export default App;
