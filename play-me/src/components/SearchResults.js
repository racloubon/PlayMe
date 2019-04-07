import React, { Component } from 'react';
import './SearchResults.css';
import SearchResultsItem from './SearchResultsItem.js'

class SearchResults extends Component {
  render() {
    return (
      <div className="searchResults">
        {this.props.data.map((song, index) => song.wrapperType === 'track' ? <SearchResultsItem key={index} song={song}/> : null)}
      </div>
    );
  }
}

export default SearchResults;
