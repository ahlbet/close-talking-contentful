import React from 'react';
import { Link, graphql } from 'gatsby';
import Nav from '../components/Header/index';
import { Socials } from '../components/Socials';

import jackImage from '../assets/images/jack-bw.jpg';
import connorImage from '../assets/images/connor.jpg';
import aboutImage from '../assets/images/landing.png';
import Tagline from '../components/Tagline';

const About = ({ data }) => {
  const bios = data.allContentfulBio.edges;

  const connorBio = bios[0].node.text.childMarkdownRemark.html;
  const jackBio = bios[1].node.text.childMarkdownRemark.html;

  return (
    <div>
      <Nav />
      <Socials />
      <Tagline />
      <div className="about">
        <h1 className="about__heading">About</h1>
        <div className="about__jack">
          <p
            className="about__jack--text"
            dangerouslySetInnerHTML={{ __html: jackBio }}
          />

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
          <p
            className="about__connor--text"
            dangerouslySetInnerHTML={{ __html: connorBio }}
          />
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query AboutQuery {
    allContentfulBio(sort: { order: DESC, fields: [id] }) {
      edges {
        node {
          id
          text {
            text
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default About;
