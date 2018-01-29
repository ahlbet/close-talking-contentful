import React, { Component } from 'react';
import Link from 'gatsby-link';

class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="section-about">
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <h3 className="card__heading">Theatre</h3>
                <span className="card__icon icon icon-quill" />
                <p className="card__description">
                  Theatre's beauty rests in its immediacy, shared breaths, and
                  sole existence in one's memory. Actors are the computers of
                  the stage.
                </p>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <h3 className="card__heading">What</h3>
                <span className="card__icon icon icon-display" />
                <p className="card__description">
                  <strong>
                    Theatre and Code grew out of an interest in examining how
                    lines of code can influence lines of a script and vice
                    versa.
                  </strong>{' '}
                  {/* How can modern tech change the way theatre artists develop and
                  perform plays? Can the theatrical process help programmers
                  code more thoughtful software? */}
                </p>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <h3 className="card__heading">Code</h3>
                <span className="card__icon icon icon-embed2" />
                <p className="card__description">
                  Code's power begins with its speed, recursiveness, and
                  seemingly endless uses. Computers are the actors of the
                  technology era.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
