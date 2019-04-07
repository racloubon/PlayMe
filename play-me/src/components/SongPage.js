import React, { Component } from 'react';
import './SongPage.css';
import { connect } from 'react-redux';

class SongPage extends Component {

  render() {
    const { selectedSong } = this.props;
    const audio = new Audio();
    audio.src = selectedSong.previewUrl
    return (
      <div className="songPage">
        <div className="songInfo">
          <img src={selectedSong.artworkUrl100} alt={selectedSong.trackName}/>
          <h1>{selectedSong.trackName}</h1>
          <h1>{selectedSong.artistName}</h1>
          <h1>{selectedSong.collectionName}</h1>
          <h1>{selectedSong.primaryGenreName}</h1>
          <h1>{selectedSong.releaseDate.slice(0,4)}</h1>
          <h1>{selectedSong.trackTimeMillis}</h1>
        </div>
        <div className="audioButtons">
            <button onClick={() => audio.play()}>Play</button>
            <button onClick={() => audio.pause()}>Pause</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedSong: state.selectedSong,
})

export default connect(mapStateToProps)(SongPage);
