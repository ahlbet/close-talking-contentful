import React, { Component } from 'react';
import Link from 'gatsby-link';

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="section-contact">
          <div className="contact">
            <h3 className="contact__heading">Contact</h3>
            <p className="contact__description">
              Theatre and Code is currently open to collaborations! Do you have
              a theatre project that could benefit from code? Are you a
              programmer interested in including theatre in your software? We
              would love to chat.
            </p>
            <a className="contact__email" href="mailto:dm.stratton94@gmail.com">
              dm.stratton94@gmail.com
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
