import React, { Component } from 'react';
import SearchResultsItemModal from './SearchResultsItemModal';
import Card from 'react-bootstrap/Card';

class SearchResultsItem extends Component {

  state = {
    showDetail: false
  }

  toggleDetail = () => {
    const { showDetail } = this.state;
    showDetail ? this.setState({showDetail: false}) : this.setState({showDetail: true})
  }

  render() {
    const { song } = this.props;
    const { showDetail } = this.state
    return (
      <div>
        <Card
          style={{ width: '150px' }}
          onClick={this.toggleDetail}>
          <Card.Img variant="top" src={song.artworkUrl100} />
          <Card.Body>
            <Card.Title style={{fontSize: 14}}>{song.trackName}</Card.Title>
            <Card.Text style={{fontSize: 11}}>
              {song.artistName}
            </Card.Text>
          </Card.Body>
        </Card>

        <SearchResultsItemModal
          show={showDetail}
          onHide={this.toggleDetail}
          song={song}
        />
      </div>
    );
  }
}

export default SearchResultsItem;
