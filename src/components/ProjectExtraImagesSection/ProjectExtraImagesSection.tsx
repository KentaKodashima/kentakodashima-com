import React, { FunctionComponent } from 'react'

import { StyledProjectExtraImages, StyledGatsbyImage } from './ProjectExtraImagesSection.styled'

type ProjectDetailMainImagesProps = {
  sectionTitle: string
  imageTitle: string
  extraImages: [{
    id: string
    childImageSharp: {
      fluid: any
    }
  }]
}

const ProjectExtraImagesSection: FunctionComponent<ProjectDetailMainImagesProps> = ({ sectionTitle, imageTitle, extraImages }) => {
  return (
    <StyledProjectExtraImages>
      <h3>
        {sectionTitle}
      </h3>
      <div>
        {
          extraImages.map((image) => {
            return (
              <StyledGatsbyImage
                title={imageTitle}
                alt={imageTitle}
                fluid={{ ...image.childImageSharp.fluid }}
              />
            )
          })
        }
      </div>
    </StyledProjectExtraImages>
  )
}

export default ProjectExtraImagesSection