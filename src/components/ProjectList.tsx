import React, { FunctionComponent } from 'react'

import projectListStyles from '../scss/components/ProjectList.module.scss'
import ProjectThumbnail from './ProjectThumbnail'

type ProjectListProps = {
  projectListItems: string[]
}

const ProjectList: FunctionComponent<ProjectListProps> = ({ projectListItems }) => {
  return (
    <div className={projectListStyles.thumbnailWrapper}>
      {
        projectListItems.map((project) => {
          <ProjectThumbnail project={project}/>
        })
      }
    </div>
  )
}

export default ProjectList