import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';

import aboutImage from '../assets/images/landing.png';

const About = () => (
  <div>
    <div className="about">
      <h1 className="about__heading">About</h1>
      <p className="about__jack">
        <b>Jack Rossiter-Munley</b> is a paralegal by day and a freelance
        writer/editor/podcaster by night. In addition to co-hosting Close
        Talking, he is also the editor-in-chief for{' '}
        <a target="_blank" rel="noopener" href="http://trolltennis.com/">trolltennis.com</a> and the host of the New Books in
        National Security podcast. Jack produces Poetry Spoken Here, a poetry
        interview podcast. Jack also co-hosts a Shakespeare podcast,{' '}
        <a target="_blank" rel="noopener" href="https://itunes.apple.com/us/podcast/party-bard/id1263721147?mt=2">Party Bard</a>, with YA author Molly Booth. The music heard
        at the beginning and end of every Close Talking episode is composed and
        performed by Jack.
      </p>
      <p className="about__connor">
        <b>Connor McNamara Stratton</b> is an Master of Fine Arts candidate in
        poetry at the University of Minnesota. His poetry and reviews have been
        published in <em>DIAGRAM</em>, <em>Rogue Agent</em>, <em>Full Stop</em>,
        and <em>Everyday Genius</em>. In addition to co-hosting Close Talking,
        he is a mentor for the Minnesota Prison Writing Workshop, and an
        intermittent theater director.
      </p>

      <p className="about__homepage">
        Go back to the <Link to="/">homepage</Link> or listen to the{' '}
        <Link to="/podcasts/">podcasts</Link>!
      </p>

      <img
        className="about__image"
        src={aboutImage}
        alt="About image for Close Talking"
      />
    </div>
    {/* <Footer /> */}
  </div>
);

export default About;
