import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

const Button = styled(Link)`
  font-size: 2.5rem;
  font-weight: 100;
  border-radius: 3px;
  padding: 1.5rem 3rem;
  margin: 0 1rem;
  background: transparent;
  color: #852222;
  border: 2px solid #852222;
  text-transform: uppercase;

  :hover {
    background: #852222;
    color: white;
  }
`;

const IndexPage = () => (
  <div>
    {/* <Navigation /> */}
    <section id="home" className="section-landing">
      <div className="landing">
        {/* <h1 className="landing__heading">Close Talking</h1> */}
        <img className="landing__logo" src={logo} alt="Close Talking Logo" />
        <p className="landing__sub-heading">
          Close Talking is a podcast hosted by good friends Connor Stratton and
          Jack Rossiter-Munley. In each episode the two read a poem and discuss
          at length. The pop culture references fly as freely as the literary
          theories. Close Talking is a poetry podcast anyone can enjoy.
        </p>
        {/* <Link className="toBlog" to="/blog/"> */}
        <Button to="/podcasts/">Podcasts</Button>
        <Button to="/about/">About</Button>
        {/* </Link> */}
      </div>
    </section>
    <Footer />
  </div>
);

export default IndexPage;
