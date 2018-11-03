import React, { Component } from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';
import { Socials } from '../components/Socials'

class IndexPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const recent = this.props.data.allContentfulPost.edges[0];

    return (
      <section id="home" className="landing">
        <div className="landing__heading">
          <Socials podcasts />
          <p className="landing__heading--text">
            Close Talking is a podcast hosted by good friends Connor Stratton and
            Jack Rossiter-Munley. In each episode the two read a poem and discuss
            at length. The pop culture references fly as freely as the literary
            theories. Close Talking is a poetry podcast anyone can enjoy.
          </p>
        </div>
        <div className="podcast landing__podcast">
          <Link to={`/podcasts/${recent.node.title.replace(/\s+/g, '-').toLowerCase()}/`}>
            <h1 className="podcast__title">{recent.node.title}</h1>
          </Link>
          <p className="podcast__date">{recent.node.date}</p>
          {recent.node.soundcloudLink ?
            <div className="podcast__audio" dangerouslySetInnerHTML={{ __html: recent.node.soundcloudLink.soundcloudLink }} /> :
            <div className="podcast__no-audio">No SoundCloud Player available.</div>
          }
          <div
            className="podcast__content"
            dangerouslySetInnerHTML={{
              __html: recent.node.content.childMarkdownRemark.html
            }}
          />
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query MostRecentQuery {
    allContentfulPost(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date(formatString: "MM-DD-YYYY")
          content {
            content
            childMarkdownRemark {
              html
              excerpt(pruneLength: 150)
            }
          }
          soundcloudLink {
            soundcloudLink
          }
        }
      }
    }
  }
`;

export default IndexPage;
