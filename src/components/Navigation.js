import React, { Component } from 'react';
import Link from 'gatsby-link';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="#home" className="navigation__link">
                  Top
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="#about" className="navigation__link">
                  About
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="#projects" className="navigation__link">
                  Projects
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/blog/" className="navigation__link">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
