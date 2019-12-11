import React, { FunctionComponent } from 'react'

import { ProjectType } from '../../themes/types'
import { StyledProjectMainImages, StyledGatsbyImage } from './ProjectDetailMainImage.styled'

type ProjectDetailMainImagesProps = {
  state: ProjectType
}

const ProjectDetailMainImages: FunctionComponent<ProjectDetailMainImagesProps> = ({ state }) => {
  return (
    <StyledProjectMainImages>
      {
        state.mainImages.map((image) => {
          return (
            <StyledGatsbyImage
              title={state.title}
              alt={state.title}
              fluid={{ ...image.childImageSharp.fluid }}
            />
          )
        })
      }
    </StyledProjectMainImages>
  )
}

export default ProjectDetailMainImages