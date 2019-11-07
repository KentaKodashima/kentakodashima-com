import React, { FunctionComponent } from 'react'

import articleListStyles from '../scss/components/ArticleList.module.scss'
import ArticleThumbnail from './ArticleThumbnail'

type ArticleListProps = {
  projectListItems: string[]
}

// const ProjectList: FunctionComponent<ProjectListProps> = ({ projectListItems }) => {
const ArticleList: FunctionComponent = () => {
  return (
    <div className={articleListStyles.articleListWrapper}>
      <ArticleThumbnail />
      <ArticleThumbnail />
      <ArticleThumbnail />
      <ArticleThumbnail />
      {/* {
        projectListItems.map((project) => {
          <ProjectThumbnail project={project}/>
        })
      } */}
    </div>
  )
}

export default ArticleList