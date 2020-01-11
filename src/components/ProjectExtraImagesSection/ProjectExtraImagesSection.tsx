import React, { FunctionComponent } from 'react'

import { StyledProjectExtraImages, StyledGatsbyImage } from './ProjectExtraImagesSection.styled'

type ProjectDetailMainImagesProps = {
  title: string
  extraImages: [{
    id: string
    childImageSharp: {
      fluid: any
    }
  }]
}

const ProjectExtraImagesSection: FunctionComponent<ProjectDetailMainImagesProps> = ({ title, extraImages }) => {
  return (
    <StyledProjectExtraImages>
      {
        extraImages.map((image) => {
          return (
            <StyledGatsbyImage
              title={title}
              alt={title}
              fluid={{ ...image.childImageSharp.fluid }}
            />
          )
        })
      }
    </StyledProjectExtraImages>
  )
}

export default ProjectExtraImagesSection