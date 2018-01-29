import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <div className="post-wrap">
        <Link className="back-to-blog" to="/blog/">
          Back to blog
        </Link>
        <h1>{post.frontmatter.title}</h1>
        <img
          src={post.frontmatter.indexImage.childImageSharp.responsiveSizes.src}
          alt={post.frontmatter.title}
        />
        {/* {post.frontmatter.indexImage && <Img />} */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link className="back-to-blog" to="/blog/">
          Back to blog
        </Link>
      </div>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        indexImage {
          childImageSharp {
            responsiveSizes(maxWidth: 800) {
              src
            }
          }
        }
      }
    }
  }
`;
