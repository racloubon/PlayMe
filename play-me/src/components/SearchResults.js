import React, { Component } from 'react';
import SearchResultsItem from './SearchResultsItem.js';
import Dropdown from 'react-bootstrap/Dropdown';
import CardGroup from 'react-bootstrap/CardGroup';

const SearchResults = ({ data, sort }) => {
  return (
    <div>
      {
        data.length
          ? (<Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Sort Results By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => sort('priceAscending')}>Price (Lowest first)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => sort('priceDescending')}>Price (Highest first)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => sort('genreAscending')}>Genre (A-Z)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => sort('genreDescending')}>Genre (Z-A)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => sort('tracklengthAscending')}>Tracklength (Shortest first)</Dropdown.Item>
              <Dropdown.Item
                onClick={() => sort('tracklengthDescending')}>Tracklength (Longest first)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>)
          : ''
      }
      <CardGroup>
        <div className="searchResults">
          {data.map(song => <SearchResultsItem
            key={song.trackId}
            song={song}/>)}
        </div>
      </CardGroup>
    </div>
  );
}


export default SearchResults;
