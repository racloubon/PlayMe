import React, { Component } from 'react';
import './SearchResults.css';
import SearchResultsItem from './SearchResultsItem.js'

class SearchResults extends Component {
  render() {
    return (
      <div className="searchResults">
        {this.props.data.map((song, index) => <SearchResultsItem key={index} song={song}/>)}
      </div>
    );
  }
}

export default SearchResults;
