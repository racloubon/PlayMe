import React, { Component } from 'react';
import './SearchResults.css';
import SearchResultsItem from './SearchResultsItem.js'


class SearchResults extends Component {

  render() {
    const { data, sort } = this.props;
    return (
      <div className="searchResults">
        {data.length
          ? (<div className="sortButtons">
              <select>
                <option value="Price High to Low" onClick={() => sort('price', 'ascending')}>Price (Highest First)</option>
                <option value="Price Low to High" onClick={() => sort('price', 'descending')}>Price (Lowest First)</option>
                <option value="Genre A-Z" onClick={() => sort('genre', 'descending')}>Genre A-Z</option>
                <option value="Genre Z-A" onClick={() => sort('genre', 'ascending')}>Genre Z-A</option>
                <option value="Tracklength High to Low" onClick={() => sort('tracklength', 'ascending')}>Tracklength (Longest First)</option>
                <option value="Tracklength Low to High" onClick={() => sort('tracklength', 'descending')}>Tracklength (Shortest First)</option>
              </select>
            </div> )
          : null
        }

        <div className="searchResultsList">
          {data.map((song, index) => song.wrapperType === 'track' ? <SearchResultsItem key={index} song={song}/> : null)}
        </div>
      </div>
    );
  }
}

export default SearchResults;
