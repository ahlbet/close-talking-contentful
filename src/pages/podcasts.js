import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import hellyea from '../assets/images/hell4 copy.jpg';
import wavy2 from '../assets/images/wavy2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Socials } from '../components/Socials'

class Podcasts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (typeof twttr.widgets !== 'undefined') {
      twttr.widgets.load();
    }
  }

  render() {
    return (
      <div>
        <Socials />
        <div className="podcasts">
          <div>
            <h1 className="podcasts__heading">Podcasts</h1>
            <ul className="podcasts__list">
              {this.props.data.allContentfulPost.edges.map(post => (
                <li className="podcasts__item" key={post.node.id}>
                  <Link className="podcasts__item--link" to={`/podcasts/${post.node.title.replace(/\s+/g, '-').toLowerCase()}/`}>
                    {post.node.title}
                  </Link>
                  <p>{post.node.date}</p>
                  <p className="podcasts__item--excerpt">{post.node.content.childMarkdownRemark.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="podcasts__info">
            <a className="twitter-timeline" href="https://twitter.com/CloseTalking?ref_src=twsrc%5Etfw" data-width="420" data-height="420">Tweets by CloseTalking</a>
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
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

export default Podcasts;
