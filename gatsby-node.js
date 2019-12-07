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
  const { frontmatter } = node
  if (frontmatter) {
    const { image } = frontmatter
    if (image) {
      if (image.indexOf('/images') === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/assets/', image)
        )
      }
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  fmImagesToRelative(node)
}