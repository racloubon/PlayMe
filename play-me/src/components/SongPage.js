import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SongPage.css';
import { connect } from 'react-redux';
import { setSelectedSong } from '../redux/actions.js'
import ShareButtons from './ShareButtons.js'

class SongPage extends Component {

  fetchAndSetSong = (id) => {
    const { setSelectedSong } = this.props;
    fetch(`https://itunes.apple.com/search?term=${id}`)
      .then(response => response.json())
      .then(response => setSelectedSong(response.results[0]))
  }

  componentDidMount() {
    const { selectedSong, match } = this.props;
    if (!selectedSong.trackName) {
      this.fetchAndSetSong(match.params.id)
    }
  }

  render() {
    const { selectedSong } = this.props;
    const audio = new Audio();
    audio.src = selectedSong.previewUrl

    return (
      <div className="songPage">
        {selectedSong.trackName
          ? (<div>
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
              <div>
                <ShareButtons trackId={selectedSong.trackId} />
              </div>
              <div className="backButton">
                <Link to={`/`}><button> Back to Search</button></Link>
              </div>
            </div>)
          : <div>LOADING...</div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedSong: state.selectedSong,
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedSong: selectedSong => dispatch(setSelectedSong(selectedSong))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongPage);
