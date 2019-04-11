import React, { Component } from 'react';
import './ShareButtons.css';
import config from '../config.js'

import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

class ShareButtons extends Component {

  render() {
    const { trackId } = this.props
    const url = `${config.host}/song/${trackId}`

    return (
      <div className="shareButtonsContainer">
        <div className="shareButtonsHeader">
          <p>Share what you're listening to</p>
        </div>
        <div className="shareButtons">
          <FacebookShareButton
            url={url}
            quote={"Play Me"}>
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            quote={"Play Me"}>
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
          <RedditShareButton
            url={url}
            quote={"Play Me"}>
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>
          <EmailShareButton
            url={url}
            quote={"Play Me"}>
            <EmailIcon
              size={32}
              round />
          </EmailShareButton>
        </div>
      </div>
    );
  }
}

export default ShareButtons
