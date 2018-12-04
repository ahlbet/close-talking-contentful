import React, { Component } from 'react';
import { Link } from 'gatsby';

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
            href="https://www.dylanstratton.com/"
          >
            Dylan Stratton
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
