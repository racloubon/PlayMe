import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  handleChange = (event) => {
    this.props.search(event.target.value)
  }

  render() {
    return (
      <div className="searchBar">
        <input type="text" placeholder="Search for a song, artist, album or genre..." onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchBar;
