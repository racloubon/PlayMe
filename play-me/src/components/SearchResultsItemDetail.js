import React, { Component } from 'react';
import './SearchResultsItemDetail.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setSelectedSong } from '../redux/actions.js'
import { millisecondsToMinutes } from '../formattingFunctions.js'


class SearchResultsItemDetail extends Component {

  render() {
    const { song, setSelectedSong } = this.props
    return (
      <div className="searchResultsItemDetail">
        <div className="trackArtwork">
          <img src={song.artworkUrl100} alt={song.trackName}/>
        </div>
        <div className="trackDetails">
          <h3>Album: {song.collectionName}</h3>
          <h3>Released: {song.releaseDate.slice(0,4 )}</h3>
          <h3>Genre: {song.primaryGenreName}</h3>
          <h3>Track Length: {millisecondsToMinutes(song.trackTimeMillis)}</h3>
          <h3>Track Price: ${song.trackPrice}</h3>
        </div>
        <Link to={`/song/${song.trackId}`} onClick={() => setSelectedSong(song)}><button className="button play"></button></Link>

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
