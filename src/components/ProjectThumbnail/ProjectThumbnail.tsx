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
  slug: string
}

const ProjectThumbnail: FunctionComponent<ProjectThumbnailProps> = ({ project, slug }) => {
  return (
    <StyledThumbnailWrapper>
      <StyledThumbnailAnchor
        to={slug}
        state={project}
      >
        <StyledGatsbyImage
          title={project.title}
          alt={project.title}
          fluid={{ ...project.thumbnail.childImageSharp.fluid }}
        />
        <StyledTextWrapper>
          <StyledThumbnailTitle>{project.title}</StyledThumbnailTitle>
          <StyledDescription>{project.thumbnailSubtitle}</StyledDescription>
        </StyledTextWrapper>
      </StyledThumbnailAnchor>
    </StyledThumbnailWrapper>
  )
}

export default ProjectThumbnail
