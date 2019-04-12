import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { connect } from 'react-redux';
import { setSelectedSong } from '../redux/actions.js'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { millisecondsToMinutes } from '../formattingFunctions.js'

class SearchResultsItemModal extends Component {

  render() {
    const { song, setSelectedSong } = this.props
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {song.trackName}, {song.artistName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="horizontalContainer">
            <img
              src={song.artworkUrl100}
              alt={song.trackName}
            />
            <div className="verticalContainer">
              <p>Album: {song.collectionName}</p>
              <p>Released: {song.releaseDate.slice(0,4 )}</p>
              <p>Genre: {song.primaryGenreName}</p>
              <p>Track Length: {millisecondsToMinutes(song.trackTimeMillis)}</p>
              <p>Track Price: ${song.trackPrice}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/song/${song.trackId}`}>
            <Button onClick={() => setSelectedSong(song)}>
              Play
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedSong: selectedSong => dispatch(setSelectedSong(selectedSong))
})

export default connect(null, mapDispatchToProps)(SearchResultsItemModal);
