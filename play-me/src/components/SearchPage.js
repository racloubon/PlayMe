import React, { Component } from 'react';
import './SearchPage.css';
import { connect } from 'react-redux';
import { setSearchResults } from '../redux/actions.js'
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults';

class SearchPage extends Component {

  search = (term) => {
    fetch(`https://itunes.apple.com/search?term=${term}`)
      .then(response => response.json())
      .then(response => this.props.setSearchResults(response))
  }

  render() {
    console.log(this.props, 'search page props')
    return (
      <div className="searchPage">
        <SearchBar search={this.search}/>
        <SearchResults />
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
)(SearchPage);
