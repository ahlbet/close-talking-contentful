import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Socials } from '../components/Socials';
import logo from '../assets/images/ctlogo-updated3-noImage.png';

class IndexPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const recent = this.props.data.allContentfulPost.edges[0];

    return (
      <section id="home" className="landing">
        <div className="landing__heading">
          {/* <Socials podcasts /> */}
          <div className="landing__nav">
            <div>
              <Link className="landing__nav--item" to="/podcasts/">Podcasts</Link>
              <Link className="landing__nav--item" to="/about/">About</Link>
            </div>
            <img className="landing__logo" src={logo} alt="Close Talking: A Poetry Podcast" />
          </div>
          <p className="landing__heading--text">
            Close Talking is a podcast hosted by good friends Connor Stratton and
            Jack Rossiter-Munley. In each episode the two read a poem and discuss
            at length. The pop culture references fly as freely as the literary
            theories. Close Talking is a poetry podcast anyone can enjoy.
          </p>
        </div>
        {/* <div className="podcast landing__podcast"> */}
        <Link className="landing__recent" to={`/podcasts/${recent.node.title.replace(/\s+/g, '-').toLowerCase()}/`}>
          <h1 className="podcast__title">{recent.node.title}</h1>
        </Link>
        {/* <p className="podcast__date">{recent.node.date}</p>
          {recent.node.soundcloudLink ?
            <div className="podcast__audio" dangerouslySetInnerHTML={{ __html: recent.node.soundcloudLink.soundcloudLink }} /> :
            <div className="podcast__no-audio">No SoundCloud Player available.</div>
          }
          <div
            className="podcast__content"
            dangerouslySetInnerHTML={{
              __html: recent.node.content.childMarkdownRemark.html
            }}
          /> */}
        {/* </div> */}
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
