import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const Blog = ({ data }) => (
  <div>
    <ul>
      {data.allContentfulPost.edges.map(post => (
        <li key={post.node.id}>
          <Link to={`/blog/${post.node.title.replace(/\s+/g, '-')}/`}>
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

export default Blog;
