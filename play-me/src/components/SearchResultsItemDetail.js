import React, { Component } from 'react';
import './SearchResultsItemDetail.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setSelectedSong } from '../redux/actions.js'

function millisecondsToMinutes (milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

class SearchResultsItemDetail extends Component {

  render() {
    const { song, setSelectedSong } = this.props
    return (
      <div className="searchResultsItemDetail">
        <h3>{song.collectionName}</h3>
        <h3>{song.releaseDate.slice(0,4 )}</h3>
        <h3>{song.primaryGenreName}</h3>
        <h3>{millisecondsToMinutes(song.trackTimeMillis)}</h3>
        <h3>${song.trackPrice}</h3>
        <img src={song.artworkUrl100} alt={song.trackName}/>
        <h1><Link to={`/song`} onClick={() => setSelectedSong(song)}> PLAY ME </Link></h1>

      </div>
    );
  }
}

//not needed, holding function for now
const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedSong: selectedSong => dispatch(setSelectedSong(selectedSong))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsItemDetail);
