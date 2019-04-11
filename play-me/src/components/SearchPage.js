import React, { Component } from 'react';
import './SearchPage.css';
import { connect } from 'react-redux';
import {
  setSearchResults,
  sortSearchResultsByGenreAscending,
  sortSearchResultsByPriceAscending,
  sortSearchResultsByTracklengthAscending,
  sortSearchResultsByGenreDescending,
  sortSearchResultsByPriceDescending,
  sortSearchResultsByTracklengthDescending
} from '../redux/actions.js';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults';

class SearchPage extends Component {

  search = (term) => {
    fetch(`https://itunes.apple.com/search?term=${term}`)
      .then(response => response.json())
      .then(response => this.props.setSearchResults(response))
  }

  sort = (criterion, direction) => {
    const {
      sortSearchResultsByGenreAscending,
      sortSearchResultsByPriceAscending,
      sortSearchResultsByTracklengthAscending,
      sortSearchResultsByGenreDescending,
      sortSearchResultsByPriceDescending,
      sortSearchResultsByTracklengthDescending
    } = this.props
    if (criterion === 'genre' && direction === 'ascending') sortSearchResultsByGenreAscending()
    else if (criterion === 'genre' && direction === 'descending') sortSearchResultsByGenreDescending()
    else if (criterion === 'price' && direction === 'ascending') sortSearchResultsByPriceAscending()
    else if (criterion === 'price' && direction === 'descending') sortSearchResultsByPriceDescending()
    else if (criterion === 'tracklength' && direction === 'ascending') sortSearchResultsByTracklengthAscending()
    else if (criterion === 'tracklength' && direction === 'descending') sortSearchResultsByTracklengthDescending()
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
  sortSearchResultsByGenreAscending: results => dispatch(sortSearchResultsByGenreAscending(results)),
  sortSearchResultsByPriceAscending: results => dispatch(sortSearchResultsByPriceAscending(results)),
  sortSearchResultsByTracklengthAscending: results => dispatch(sortSearchResultsByTracklengthAscending(results)),
  sortSearchResultsByGenreDescending: results => dispatch(sortSearchResultsByGenreDescending(results)),
  sortSearchResultsByPriceDescending: results => dispatch(sortSearchResultsByPriceDescending(results)),
  sortSearchResultsByTracklengthDescending: results => dispatch(sortSearchResultsByTracklengthDescending(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
