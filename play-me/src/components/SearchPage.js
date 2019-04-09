import React, { Component } from 'react';
import './SearchPage.css';
import { connect } from 'react-redux';
import { setSearchResults, sortSearchResultsByGenre, sortSearchResultsByPrice, sortSearchResultsByTracklength } from '../redux/actions.js'
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults';

class SearchPage extends Component {

  search = (term) => {
    fetch(`https://itunes.apple.com/search?term=${term}`)
      .then(response => response.json())
      .then(response => this.props.setSearchResults(response))
  }

  sort = (criterion) => {
    if (criterion === 'genre') this.props.sortSearchResultsByGenre([...this.props.searchResults])
    else if (criterion === 'price') this.props.sortSearchResultsByPrice([...this.props.searchResults])
    else if (criterion === 'tracklength') this.props.sortSearchResultsByTracklength([...this.props.searchResults])
  }

  render() {
    return (
      <div className="searchPage">
        <SearchBar search={this.search}/>
        <SearchResults sort={this.sort} data={this.props.searchResults}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
})

const mapDispatchToProps = (dispatch) => ({
  setSearchResults: results => dispatch(setSearchResults(results)),
  sortSearchResultsByGenre: results => dispatch(sortSearchResultsByGenre(results)),
  sortSearchResultsByPrice: results => dispatch(sortSearchResultsByPrice(results)),
  sortSearchResultsByTracklength: results => dispatch(sortSearchResultsByTracklength(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
