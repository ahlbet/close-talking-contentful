import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const Podcasts = ({ data }) => (
  <div>
    <ul>
      {data.allContentfulPodcast.edges.map(post => (
        <li key={post.node.id}>
          <Link to={`/podcasts/${post.node.title.replace(/\s+/g, '-')}/`}>
            {post.node.title}
          </Link>
        </li>
      ))}
    </ul>

    <Link to="/">Back home</Link>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulPodcast(sort: { order: DESC, fields: [date] }) {
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
