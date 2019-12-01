import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  StyledThumbnailWrapper,
  StyledThumbnailAnchor,
  StyledTextWrapper,
  StyledThumbnailTitle,
  StyledDescription
} from './ProjectThumbnail.styled'

type ProjectThumbnailProps = {
  project: {
    title: string
    category_type: string
    thumbnail: {
      id: string
      childImageSharp: {
        fluid: any
      }
    }
    thumbnail_subtitle: string
    main_images: []
    app_links: {
      app_link: {
        link_type: string
        url: string
      }
    }
    github_link: string
    about: string
    technologies: string
    extra_images?: []
  }
}

const ProjectThumbnail: FunctionComponent<ProjectThumbnailProps> = ({ project }) => {
  return (
    <StyledThumbnailWrapper>
      <StyledThumbnailAnchor href="#">
        <Img
          title='Thumbnail Image'
          alt='Thumbnail Image'
          fluid={{ ...project.thumbnail.childImageSharp.fluid, aspectRatio: 1 }}
        />
        <StyledTextWrapper>
          <StyledThumbnailTitle >
            {project.title}
          </StyledThumbnailTitle>
          <StyledDescription>
            {project.thumbnail_subtitle}
          </StyledDescription>
        </StyledTextWrapper>
      </StyledThumbnailAnchor>
    </StyledThumbnailWrapper>
  )
}

export default ProjectThumbnail
