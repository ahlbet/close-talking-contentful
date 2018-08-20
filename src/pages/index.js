import React from 'react';
import Link from 'gatsby-link';

import Footer from '../components/Footer';
// import logo from '../assets/images/logo.svg';
import logo from '../assets/images/logo3.svg';

const IndexPage = () => (
  <div>
    <section id="home" className="section-landing">
      <div className="landing">
        <img className="landing__logo" src={logo} alt="Close Talking Logo" />
        <p className="landing__sub-heading">
          Close Talking is a podcast hosted by good friends Connor Stratton and
          Jack Rossiter-Munley. In each episode the two read a poem and discuss
          at length. The pop culture references fly as freely as the literary
          theories. Close Talking is a poetry podcast anyone can enjoy.
        </p>
        <div className="landing__navigation">
          <Link className="landing__navigation--podcasts" to="/podcasts/">
            Podcasts
          </Link>
          <Link className="landing__navigation--about" to="/about/">
            About
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default IndexPage;
