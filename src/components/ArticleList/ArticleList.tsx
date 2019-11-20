import React, { FunctionComponent } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { StyledArticleList } from './ArticleList.styled'
import ArticleThumbnail from '../ArticleThumbnail'

const ArticleList: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query blogArticlesQuery  {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY, MMMM DD")
              intro
              title
              url
              thumbnail {
                id
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const { edges: articles } = data.allMarkdownRemark

  return (
    <StyledArticleList>
      {
        articles.map(({ node: { frontmatter: article } }) => {
          return <ArticleThumbnail key={article.thumbnail.id} article={article}/>
        })
      }
    </StyledArticleList>
  )
}

export default ArticleList