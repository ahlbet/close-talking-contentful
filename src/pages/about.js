import React from 'react';
import { Link } from 'gatsby';
import Nav from '../components/Header/index';
import { Socials } from '../components/Socials';

import jackImage from '../assets/images/jack-bw.jpg';
import connorImage from '../assets/images/connor.jpg';
import aboutImage from '../assets/images/landing.png';
import Tagline from '../components/Tagline';

const About = () => (
  <div>
    <Nav />
    <Socials />
    <Tagline />
    <div className="about">
      <h1 className="about__heading">About</h1>
      <div className="about__jack">
        <p className="about__jack--text">
          <b>Jack</b> is a writer, editor, and podcast producer. He has an MS in
          journalism from the Columbia School of Journalism where he was a
          duPont Fellow. His writing has been published in{' '}
          <em>The Ekphrastic Review</em>, <em>Barren Magazine</em>, and{' '}
          <em>One Week//One Band</em>, among many others. In addition to his
          work on the various Cardboard Box Productions podcasts, he is the host
          of the New Books in National Security podcast and produced "Happy
          Land" an episode of the investigative podcast series, Shoe Leather.
          The music heard at the beginning and end of every Close Talking
          episode is composed and performed by Jack.
        </p>

        <img
          src={jackImage}
          alt="A Headshot of Jack"
          className="about__bio--img"
        />
      </div>
      <div className="about__connor">
        <img
          src={connorImage}
          alt="A Headshot of Connor"
          className="about__bio--img"
        />
        <p className="about__connor--text">
          <b>Connor McNamara Stratton</b> holds a Master of Fine Arts in poetry
          from the University of Minnesota and received the Academy of American
          Poets prize from Oberlin College. His poetry and reviews have been
          published in <em>DIAGRAM</em>, <em>Rogue Agent</em>,{' '}
          <em>Full Stop</em>, and <em>Everyday Genius</em>, among others, and he
          has held a writing residency at the Anderson Center. In addition to
          co-hosting Close Talking, he is a mentor for the Minnesota Prison
          Writing Workshop and an intermittent theater director.
        </p>
      </div>
    </div>
  </div>
);

export default About;
