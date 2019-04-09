import React, { Component } from 'react';
import './ShareButtons.css';
import config from '../config.js'

import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  GooglePlusIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

class ShareButtons extends Component {


  render() {
    console.log()

    return (
      <div>
        <div className="shareButtonsHeader">
          <p>Share what you're listening to</p>
        </div>
        <div className="shareButtons">
          <FacebookShareButton
            url={`${config.host}`}
            quote={"Play Me"}>
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
          <GooglePlusShareButton
            url={`${config.host}`}
            quote={"Play Me"}>
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
          <TwitterShareButton
            url={`${config.host}`}
            quote={"Play Me"}>
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
          <RedditShareButton
            url={`${config.host}`}
            quote={"Play Me"}>
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>
          <EmailShareButton
            url={`${config.host}`}
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
