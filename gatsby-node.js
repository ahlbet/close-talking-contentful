const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/post.js');

  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `).then(res => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }

      res.data.allContentfulPost.edges.forEach(({ node }) => {
        createPage({
          path: `/podcasts/${node.title.replace(/\s+/g, '-').toLowerCase()}/`,
          component: postTemplate,
          context: {
            id: node.id
          }
        });
      });
    });
};
