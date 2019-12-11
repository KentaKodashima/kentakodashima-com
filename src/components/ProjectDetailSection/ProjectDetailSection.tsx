import React, { FunctionComponent } from 'react'

import { StyledProjectDetailSection } from './ProjectDetailSection.styled'

type ProjectDetailSectionProps = {
  title: string
  about?: string
  technologies?: string[]
}

const ProjectDetailSection: FunctionComponent<ProjectDetailSectionProps> = ({ title, technologies, about }) => {
  return (
    <StyledProjectDetailSection>
      <h3>
        {title}
      </h3>
      { about &&
        <p>
          {about}
        </p>
      }
      { technologies &&
        <ul>
          {
            technologies.map(technology => {
              return <li>{technology}</li>
            })
          }
        </ul>
      }
    </StyledProjectDetailSection>
  )
}

export default ProjectDetailSection