import React, { Component } from 'react';
import Link from 'gatsby-link';

import letter from '../../assets/images/fourfoureight/letter.mp4';

import Highlight from 'react-highlight.js';

class Letter extends Component {
  toggleCode() {
    const code = document.getElementById('letter-code');
    if (code.style.display === 'none') {
      code.style.display = 'block';
    } else {
      code.style.display = 'none';
    }
  }

  render() {
    return (
      <div>
        <div className="section-448 letter-448">
          <h3>Typed Letter Projection</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <video
            className="video-448"
            controls="controls"
            width="600px"
            src={letter}
          />
        </div>
      </div>
    );
  }
}

export default Letter;
