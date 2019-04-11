import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import SearchPage from './components/SearchPage.js';
import SongPage from './components/SongPage.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Play Me</h1>
        <Router>
          <Route path="/" exact component={SearchPage} />
          <Route path="/song/:id" component={SongPage} />
        </Router>
      </div>
    );
  }
}

export default App;
