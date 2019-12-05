import React, { FunctionComponent } from 'react'

import { StyledProjectDetailSection } from './ProjectDetailSection.styled'

type ProjectDetailSectionProps = {
  title: string
  body: string
}

const ProjectDetailSection: FunctionComponent<ProjectDetailSectionProps> = ({ title, body }) => {
  return (
    <StyledProjectDetailSection>
      <h3>
        {title}
      </h3>
      <p>
        {body}
      </p>
    </StyledProjectDetailSection>
  )
}

export default ProjectDetailSection