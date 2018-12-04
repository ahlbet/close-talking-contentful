import React from 'react';
import { Link } from 'gatsby';
import Nav from '../components/Header/index';
import { Socials } from '../components/Socials';

import jackImage from '../assets/images/jack-bw.jpg';
import connorImage from '../assets/images/connor.jpg';
import aboutImage from '../assets/images/landing.png';

const About = () => (
  <div>
    <Nav />
    <Socials />
    <div className="about">
      <h1 className="about__heading">About</h1>
      <div className="about__jack">
        <p className="about__jack--text">
          <b>Jack Rossiter-Munley</b> is a freelance writer, editor, and podcaster. His poetry and nonfiction have been published in <em>The Ekphrastic Review</em>, <em>Barren Magazine</em>, and <em>One Week//One Band</em> among others, and he writes about professional tennis and politics for <em>Last Word on Sports</em>, <em>Sports and Politics</em>, and the <em>Deep State Radio Network</em>. In addition to co-hosting Close Talking, he produces Poetry Spoken Here, a poetry interview podcast recently named one of the “Best Poetry Podcasts of 2018” by Playerfm, and is the host of the New Books in National Security podcast for the New Books Network. The music heard at the beginning and end of every Close Talking episode is composed and performed by Jack.
          </p>
        <img src={jackImage} alt="A Headshot of Jack" className="about__bio--img" />
      </div>
      <div className="about__connor">
        <img src={connorImage} alt="A Headshot of Connor" className="about__bio--img" />
        <p className="about__connor--text">
          <b>Connor McNamara Stratton</b> holds a Master of Fine Arts in poetry from the University of Minnesota and received the Academy of American Poets prize from Oberlin College. His poetry and reviews have been published in <em>DIAGRAM</em>, <em>Rogue Agent</em>, <em>Full Stop</em>, and <em>Everyday Genius</em>, among others, and he has held a writing residency at the Anderson Center. In addition to co-hosting Close Talking, he is a mentor for the Minnesota Prison Writing Workshop and an intermittent theater director.
        </p>
      </div>
    </div>
  </div>
);

export default About;
