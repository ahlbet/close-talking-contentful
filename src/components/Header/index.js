import React from 'react';
import Link from 'gatsby-link';
import logo from '../../assets/images/ctlogo-updated3.png';

const Header = () => (
  <div className="nav">
    <div className="nav__navigation">
      <Link className="nav__navigation--podcasts" to="/podcasts/">
        Podcasts
      </Link>
      <Link className="nav__navigation--home" to="/">
        <img className="nav__logo" src={logo} alt="Close Talking Logo" />
      </Link>
      <Link className="nav__navigation--about" to="/about/">
        About
      </Link>
    </div>
  </div>
);

export default Header;
