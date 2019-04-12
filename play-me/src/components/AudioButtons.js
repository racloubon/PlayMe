import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setSelectedSong } from '../redux/actions'

const AudioButtons = ({ audio, searchResults, trackId, setSelectedSong }) => {
  const trackIndex = searchResults.findIndex(track => track.trackId === trackId);
  let prevTrack = null;
  let nextTrack = null;
  if (trackIndex > 0) prevTrack = searchResults[trackIndex - 1]
  if (trackIndex <  searchResults.length - 1) nextTrack = searchResults[trackIndex + 1]
  return (
    <div className="audioButtons">
      {prevTrack
        ? <Link
          to={`/song/${prevTrack.trackId}`}
          onClick={() => setSelectedSong(prevTrack)}>
            <button className="button skip">
              Prev
            </button>
          </Link>
        : ''
      }
        <button
          className="button play"
          onClick={() => audio.play()}>
        </button>
        <button
          className="button pause"
          onClick={() => audio.pause()}>
        </button>
      {nextTrack
        ? <Link
          to={`/song/${nextTrack.trackId}`}
          onClick={() => setSelectedSong(nextTrack)}>
            <button className="button skip">
              Next
            </button>
          </Link>
        : ''
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
  selectedSong: state.selectedSong,
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedSong: selectedSong => dispatch(setSelectedSong(selectedSong))
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioButtons);
