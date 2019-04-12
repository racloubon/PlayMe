import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

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
          <InputGroup
            className="mb-3"
            onSubmit={this.handleSubmit}>
            <FormControl
              placeholder="Search for a song, artist, album or genre"
              aria-label="Song search"
              aria-describedby="basic-addon2"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                type="submit">Go</Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
