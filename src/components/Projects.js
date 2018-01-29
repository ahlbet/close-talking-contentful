import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import thumbnail448 from '../assets/images/448-thumbnail-small.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3-small.jpg';

const StyledLink = styled(Link)`
  border-radius: 3px;
  padding: 0.25rem 1rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  text-transform: uppercase;

  :hover {
    background: black;
    color: white;
  }
`;

class Projects extends Component {
  render() {
    return (
      <div>
        <section id="projects" className="section-projects projects">
          <h3 className="projects__heading">Projects</h3>
          <div className="row">
            <div className="col-1-of-2">
              <div className="projects__project">
                <p className="projects__info">
                  The production of <em>4.48 Psychosis</em>, a play by Sarah
                  Kane, at the Phoenix Theater in Minneapolis used projections
                  written in JavaScript and p5.js.
                </p>
                <img
                  className="projects__image"
                  src={thumbnail448}
                  alt="Project Image"
                />
                <StyledLink className="projects__link" to="/448/">
                  Check out 4.48 Psychosis!
                </StyledLink>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="projects__project">
                <p className="projects__info projects__info--blog">
                  We are still in the early stages of developing this project.
                  In the meantime, check out our blog and contact us with
                  project ideas or questions!
                </p>
                <img
                  className="projects__image"
                  src={project3}
                  alt="Project Image"
                />
                <StyledLink className="projects__link" to="/blog/">
                  Read our blog!
                </StyledLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
