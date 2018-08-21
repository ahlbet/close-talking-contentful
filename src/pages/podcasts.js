import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import hellyea from '../assets/images/hell4 copy.jpg';

const Podcasts = ({ data }) => (
  <div>
    <div className="podcasts">
      <h1 className="podcasts__heading">Podcasts</h1>
      <div className="podcasts__row">
        <div className="podcasts__list--wrap">
          <ul className="podcasts__list">
            {data.allContentfulPost.edges.map(post => (
              <li className="podcasts__item" key={post.node.id}>

                {/* { console.log(post.node.title.replace(/\s+/g, '-').toLowerCase()) } */}
                <Link className="podcasts__item--link" to={`/podcasts/${post.node.title.replace(/\s+/g, '-').toLowerCase()}/`}>
                  {post.node.title}
                </Link>
                <p>{post.node.date}</p>
                <p className="podcasts__item--excerpt">{post.node.content.childMarkdownRemark.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="podcasts__info--wrap">
          <img src={hellyea} alt="Image" className="podcasts__image" />
          <div className="podcasts__info">
            {/* <p className="podcasts__info--title">Close Talking</p> */}
            <p className="podcasts__info--description">Close Talking is a podcast hosted by good friends Connor Stratton and Jack Rossiter-Munley. In each episode the two read a poem and discuss at length. The pop culture references fly as freely as the literary theories. Close Talking is a poetry podcast anyone can enjoy.</p>
            <div className="podcasts__info--social-links">
              <a className="podcasts__info--social-link" href="https://www.facebook.com/CloseTalking/" target="_blank" rel="noopener">Facebook</a>

              <a className="podcasts__info--social-link" href="https://twitter.com/closetalking" target="_blank" rel="noopener">Twitter</a>

              <a className="podcasts__info--social-link" href="https://soundcloud.com/close-talking" target="_blank" rel="noopener">Soundcloud</a>

              <a className="podcasts__info--social-link" href="https://itunes.apple.com/us/podcast/close-talking/id1185025517?mt=2" target="_blank" rel="noopener">Subscribe on iTunes</a>

            </div>
            <Link className="podcasts__info--back-home" to="/">Back home</Link>

          </div>
        </div>
      </div>

      <Link className="podcasts__home" to="/">
        Back home
      </Link>
    </div>
  </div>
);

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
