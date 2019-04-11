import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    const searchString = this.state.value.replace(/ /g, '+')
    this.props.search(searchString);
    this.setState({value: ''})
    event.preventDefault();
  }

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="searchInput" value={this.state.value} onChange={this.handleChange} placeholder="Search for a song, artist, album or genre..." />
          <input type="submit" id="searchSubmit" value="Go" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
