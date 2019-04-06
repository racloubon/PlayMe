import React, { Component } from 'react';
import './SearchResultsItem.css';

class SearchResultsItem extends Component {

  render() {
    const { song } = this.props
    return (
      <div className="searchResults">
        <h1>{song.trackName}</h1>
        <h2>{song.artistName}</h2>
      </div>
    );
  }
}

export default SearchResultsItem;
