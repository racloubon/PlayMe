import React, { Component } from 'react';
import '../App.css';
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
    } = this.props;
    switch (criterion) {
      case 'priceAscending':
        return sortSearchResultsByPriceAscending()
      case 'priceDescending':
        return sortSearchResultsByPriceDescending()
      case 'genreAscending':
        return sortSearchResultsByGenreAscending()
      case 'genreDescending':
        return sortSearchResultsByGenreDescending()
      case 'tracklengthAscending':
        return  sortSearchResultsByTracklengthAscending()
      case 'tracklengthDescending':
        return  sortSearchResultsByTracklengthDescending()
      default:
        return
    }
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
  sortSearchResultsByGenreAscending: () => dispatch(sortSearchResultsByGenreAscending()),
  sortSearchResultsByPriceAscending: () => dispatch(sortSearchResultsByPriceAscending()),
  sortSearchResultsByTracklengthAscending: () => dispatch(sortSearchResultsByTracklengthAscending()),
  sortSearchResultsByGenreDescending: () => dispatch(sortSearchResultsByGenreDescending()),
  sortSearchResultsByPriceDescending: () => dispatch(sortSearchResultsByPriceDescending()),
  sortSearchResultsByTracklengthDescending: () => dispatch(sortSearchResultsByTracklengthDescending())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
