import React, { Component } from 'react';
import Link from 'gatsby-link';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__credit">
          Made by{' '}
          <a
            className="footer__link"
            rel="noreferrer noopener"
            target="_blank"
            href="http://www.dylanstratton.com/"
          >
            Dylan Stratton
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
