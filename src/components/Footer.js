import React, { Component } from 'react';
import Link from 'gatsby-link';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__row">
          {/* <li d
          {/* <li className="footer__item">
            <Link className="footer__link" to="/blog/">
              Blog
            </Link>
          </li> */}
          <li className="footer__item">
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
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
