import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { connect } from 'react-redux';
import { setSearchResults } from './redux/actions.js'
import SearchPage from './components/SearchPage.js';
import SongPage from './components/SongPage.js';

class App extends Component {

  search = (term) => {
    fetch(`https://itunes.apple.com/search?term=${term}`)
      .then(response => response.json())
      .then(response => this.props.setSearchResults(response))
  }

  render() {
    return (
      <div className="App">
        Play Me
        <Router>
          
          <Route
            path="/" exact
            render={(props) => <SearchPage {...props} search={this.search}/>}  />


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
  setSearchResults: results => dispatch(setSearchResults(results)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
