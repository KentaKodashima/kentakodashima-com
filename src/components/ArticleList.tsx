import React, { FunctionComponent } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import articleListStyles from '../scss/components/ArticleList.module.scss'
import ArticleThumbnail from './ArticleThumbnail'

type ArticleListProps = {
  projectListItems: string[]
}

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
    <div className={articleListStyles.articleListWrapper}>
      {
        articles.map(({ node: { frontmatter: article } }) => {
          return <ArticleThumbnail article={article}/>
        })
      }
    </div>
  )
}

export default ArticleList