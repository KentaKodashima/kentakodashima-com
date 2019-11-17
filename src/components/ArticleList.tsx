import React, { FunctionComponent } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import articleListStyles from '../scss/components/ArticleList.module.scss'
import ArticleThumbnail from './ArticleThumbnail'

type ArticleListProps = {
  projectListItems: string[]
}

// const ProjectList: FunctionComponent<ProjectListProps> = ({ projectListItems }) => {
const ArticleList: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query blogArticlesQuery  {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              intro
              title
              url
            }
          }
        }
      }
    }
  `)
const { edges: articles } = data.allMarkdownRemark

  return (
    <div className={articleListStyles.articleListWrapper}>
      {/* <ArticleThumbnail />
      <ArticleThumbnail />
      <ArticleThumbnail />
      <ArticleThumbnail /> */}
      {
        articles.map(({ node: { frontmatter: article } }) => {
          console.log(article, 'frontmatter')
          // <ProjectThumbnail project={project}/>
        })
      }
    </div>
  )
}

export default ArticleList