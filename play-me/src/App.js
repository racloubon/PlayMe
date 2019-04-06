import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setSearchResults } from './redux/actions.js'
import './App.css';
import SearchPage from './components/SearchPage.js';
import SongPage from './components/SongPage.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        Play Me
        <Router>
          <Route path="/" exact component={SearchPage} />
          <Route path="/song/" component={SongPage} />
        </Router>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
})


const mapDispatchToProps = (dispatch) => ({
  setSearchResults: searchResults => dispatch(setSearchResults(searchResults))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
