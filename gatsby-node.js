/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Fix: https://github.com/gatsbyjs/gatsby/issues/4753
// https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}