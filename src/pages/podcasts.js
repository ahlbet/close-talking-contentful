import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const Podcasts = ({ data }) => (
  <div>
    <div className="podcasts">
      <h1 className="podcasts__heading">Podcasts</h1>
      <ul className="podcasts__list">
        {data.allContentfulPost.edges.map(post => (
          <li className="podcasts__item" key={post.node.id}>

            {/* { console.log(post.node.title.replace(/\s+/g, '-').toLowerCase()) } */}
            <Link className="podcasts__item--link" to={`/podcasts/${post.node.title.replace(/\s+/g, '-').toLowerCase()}/`}>
              {post.node.title}
            </Link>
            <p className="podcasts__item--excerpt">{post.node.content.childMarkdownRemark.excerpt}</p>
          </li>
        ))}
      </ul>

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
              excerpt(pruneLength: 300)
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
