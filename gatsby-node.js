const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve("src/templates/post.js");

  return graphql(`
    {
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    createPaginatedPages({
      edges: res.data.allContentfulPost.edges,
      createPage: createPage,
      pageTemplate: "src/templates/podcasts.js",
      pageLength: 5, // This is optional and defaults to 10 if not used
      pathPrefix: "podcasts", // This is optional and defaults to an empty string if not used
      context: {} // This is optional and defaults to an empty object if not used
    });

    res.data.allContentfulPost.edges.forEach(({ node }) => {
      createPage({
        path: `/podcasts/${node.title.replace(/\s+/g, "-").toLowerCase()}/`,
        component: postTemplate,
        context: {
          id: node.id
        }
      });
    });
  });
};
