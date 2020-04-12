import React, { FunctionComponent } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { StyledArticleList } from './ArticleList.styled'
import { ArticleThumbnail } from '../ArticleThumbnail'

const ArticleList: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query blogArticlesQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/src\/pages\/blog)/.*\\.md$/"}}, sort: {fields: frontmatter___priority}) {
        edges {
          node {
            frontmatter {
              title
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              url
              date
              intro
            }
          }
        }
      }
    }
  `)
  const { edges: articleNodes } = data.allMarkdownRemark

  return (
    <StyledArticleList>
      {
        articleNodes.map(({ node: { frontmatter: article } }, index) => {
          return <ArticleThumbnail key={index} article={article}/>
        })
      }
    </StyledArticleList>
  )
}

export default ArticleList