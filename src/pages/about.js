import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';

import jackImage from '../assets/images/jack-bw.jpg';
import connorImage from '../assets/images/connor.jpg';
import aboutImage from '../assets/images/landing.png';

const About = () => (
  <div>
    <div className="about">
      <h1 className="about__heading">About</h1>
      <div className="about__jack">
        <p className="about__jack--text">
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
        <img src={jackImage} alt="A Headshot of Jack" className="about__bio--img" />
      </div>
      <div className="about__connor">
        <img src={connorImage} alt="A Headshot of Connor" className="about__bio--img" />
        <p className="about__connor--text">
          <b>Connor McNamara Stratton</b> holds a Master of Fine Arts in poetry from the University of Minnesota and received the Academy of American Poets prize from Oberlin College. His poetry and reviews have been published in <em>DIAGRAM</em>, <em>Rogue Agent</em>, <em>Full Stop</em>, and <em>Everyday Genius</em>, among others, and he has held a writing residency at the Anderson Center. In addition to co-hosting Close Talking, he is a mentor for the Minnesota Prison Writing Workshop and an intermittent theater director.
        </p>
      </div>

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
