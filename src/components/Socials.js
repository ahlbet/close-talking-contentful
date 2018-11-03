import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Socials extends Component {
  render() {
    return (
      <div className="social-links">
        <a className="social-link" href="https://www.facebook.com/CloseTalking/" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>

        <a className="social-link" href="https://twitter.com/closetalking" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>

        <a className="social-link" href="https://soundcloud.com/close-talking" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "soundcloud"]} /></a>

        <a className="social-link" href="https://itunes.apple.com/us/podcast/close-talking/id1185025517?mt=2" target="_blank" rel="noopener"><FontAwesomeIcon icon={["fab", "itunes"]} /></a>

      </div>
    );
  }
};