import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import {
  StyledThumbnailWrapper,
  StyledThumbnailAnchor,
  StyledTextWrapper,
  StyledThumbnailTitle,
  StyledDescription,
  StyledGatsbyImage,
} from './ProjectThumbnail.styled'
import { ProjectType } from '../../themes/types'

type ProjectThumbnailProps = {
  project: ProjectType
}

const ProjectThumbnail: FunctionComponent<ProjectThumbnailProps> = ({ project }) => {
  return (
    <StyledThumbnailWrapper>
      <StyledThumbnailAnchor
        to={'/project-detail'}
        state={project}
      >
        <StyledGatsbyImage
          title={project.title}
          alt={project.title}
          fluid={{ ...project.thumbnail.childImageSharp.fluid }}
        />
        <StyledTextWrapper>
          <StyledThumbnailTitle>{project.title}</StyledThumbnailTitle>
          <StyledDescription>{project.thumbnail_subtitle}</StyledDescription>
        </StyledTextWrapper>
      </StyledThumbnailAnchor>
    </StyledThumbnailWrapper>
  )
}

export default ProjectThumbnail
