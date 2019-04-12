import React, { Component } from 'react';
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

const ShareButtons = ({ trackId }) => {
  const url = `${config.host}/song/${trackId}`
  return (
    <div className="verticalContainer">
      <p>Share what you &#39;re listening to</p>
      <div className="horizontalContainer" style={{justifyContent: 'center'}}>
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


export default ShareButtons
