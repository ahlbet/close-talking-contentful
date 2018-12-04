const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
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
          path: `/podcasts/${node.title.replace(/\s+/g, '-')}/`,
          component: postTemplate,
          context: {
            id: node.id
          }
        });
      });
    });
};
