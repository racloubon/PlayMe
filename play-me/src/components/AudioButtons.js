import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setSelectedSong } from '../redux/actions.js'

class AudioButtons extends Component {

  render() {
    const { audio, searchResults, trackId, setSelectedSong } = this.props;
    const trackIndex = searchResults.findIndex(track => track.trackId === trackId);
    let prevTrack = null;
    let nextTrack = null;
    if (trackIndex > 0) prevTrack = searchResults[trackIndex - 1]
    if (trackIndex <  searchResults.length - 1) nextTrack = searchResults[trackIndex + 1]
    return (
      <div className="audioButtons">
        {prevTrack ? <Link
          to={`/song/${prevTrack.trackId}`}
          onClick={() => setSelectedSong(prevTrack)}><button>Previous</button></Link> : ''}
        <button onClick={() => audio.play()}>Play</button>
        <button onClick={() => audio.pause()}>Pause</button>
        {nextTrack ? <Link
          to={`/song/${nextTrack.trackId}`}
          onClick={() => setSelectedSong(nextTrack)}><button>Next</button></Link> : ''}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
  selectedSong: state.selectedSong,
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedSong: selectedSong => dispatch(setSelectedSong(selectedSong))
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioButtons);
