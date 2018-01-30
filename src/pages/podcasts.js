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
            <Link to={`/podcasts/${post.node.title.replace(/\s+/g, '-')}/`}>
              {post.node.title}
            </Link>
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
          date
          content {
            content
          }
          audio {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`;

export default Podcasts;
