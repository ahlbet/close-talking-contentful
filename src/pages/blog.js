import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const Blog = ({ data }) => (
  <div>
    <div className="blog-wrap">
      <div className="blog-header">
        <h1>Theatre and Code Blog</h1>
      </div>

      <div className="posts-wrap">
        <Link className="back-to-home" to="/">
          Back to homepage
        </Link>
        <ul>
          {data.allMarkdownRemark.edges.map(post => (
            <li key={post.node.id} className="post-wrap">
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
              <img
                className="blog-thumbnail"
                src={
                  post.node.frontmatter.indexImage.childImageSharp
                    .responsiveSizes.src
                }
              />
            </li>
          ))}
        </ul>
        {/* <img src={post.node.frontmatter.thumbnail} /> */}
      </div>
      <div className="blog-footer">
        <Link className="back-to-home" to="/">
          Back to homepage
        </Link>
      </div>
    </div>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            indexImage {
              childImageSharp {
                responsiveSizes(maxWidth: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
