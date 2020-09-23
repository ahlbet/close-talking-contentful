import React from 'react';
import { Link, graphql } from 'gatsby';
import Nav from '../components/Header/index';
import { Socials } from '../components/Socials';

import jackImage from '../assets/images/jack-bw.jpg';
import connorImage from '../assets/images/connor.jpg';
import aboutImage from '../assets/images/landing.png';
import Tagline from '../components/Tagline';

const Bio = ({ bio, index }) => {
  let bioClassName = 'about__bio';

  if (index % 2 === 1) {
    bioClassName += ' about__bio--reverse';
  }

  return (
    <div className={bioClassName}>
      <p
        className="about__text"
        dangerouslySetInnerHTML={{
          __html: bio.node.text.childMarkdownRemark.html,
        }}
      />

      <img src={bio.node.headshot.file.url} className="about__bio--img" />
    </div>
  );
};

const About = ({ data }) => {
  const bios = data.allContentfulBio.edges;

  console.log('bios', bios);

  return (
    <div>
      <Nav />
      <Socials />
      <Tagline />
      <div className="about">
        <h1 className="about__heading">About</h1>

        {bios.reverse().map((bio, index) => (
          <Bio bio={bio} index={index} key={index} />
        ))}
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
          headshot {
            file {
              url
            }
          }
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
