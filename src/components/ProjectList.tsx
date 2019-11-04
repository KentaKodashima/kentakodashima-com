import React, { FunctionComponent } from 'react'

import projectListStyles from '../scss/components/ProjectList.module.scss'
import ProjectThumbnail from './ProjectThumbnail'

type ProjectListProps = {
  projectListItems: string[]
}

// const ProjectList: FunctionComponent<ProjectListProps> = ({ projectListItems }) => {
const ProjectList: FunctionComponent = () => {
  return (
    <div className={projectListStyles.thumbnailWrapper}>
      <ProjectThumbnail />
      <ProjectThumbnail />
      <ProjectThumbnail />
      <ProjectThumbnail />
      {/* {
        projectListItems.map((project) => {
          <ProjectThumbnail project={project}/>
        })
      } */}
    </div>
  )
}

export default ProjectList