import React, { Component } from 'react';
import './SearchResults.css';
import { connect } from 'react-redux';
import { setSearchResults } from '../redux/actions.js'
import SearchResultsItem from './SearchResultsItem.js'

class SearchResults extends Component {

  render() {
    const { data, sort } = this.props;
    return (
      <div>
        <h3>Sort by:</h3>
        <button onClick={() => sort('price')}>Price</button>
        <button onClick={() => sort('genre')}>Genre</button>
        <button onClick={() => sort('tracklength')}>Track Length</button>
        <div className="searchResults">
          {data.map((song, index) => song.wrapperType === 'track' ? <SearchResultsItem key={index} song={song}/> : null)}
        </div>
      </div>
    );
  }
}

export default SearchResults;
