import React, { Component } from 'react';
import './SearchResultsItem.css';
import SearchResultsItemDetail from './SearchResultsItemDetail'

class SearchResultsItem extends Component {

  state = {
    showDetail: false
  }

  toggleDetail = () => {
    this.state.showDetail ? this.setState({showDetail: false}) : this.setState({showDetail: true})
  }

  render() {
    const { song } = this.props;
    return (
      <div className="searchResultsItem" onClick={this.toggleDetail}>
        <h3>{song.trackName}, {song.artistName}</h3>
        {this.state.showDetail ? <SearchResultsItemDetail song={song} /> : ''}
      </div>
    );
  }
}

export default SearchResultsItem;
