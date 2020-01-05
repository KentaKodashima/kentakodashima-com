import React, { FunctionComponent } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import {
  StyledSkillIconWithTextWrapper,
  StyledSkillIconWithTextImage,
  StyledSkillIconWithTextLabel
} from './SkillIconWithText.styled'

type SkillIconWithTextProps = {
  fluid: FluidObject | FluidObject[]
  label: string
}

const SkillIconWithText: FunctionComponent<SkillIconWithTextProps> = ({ fluid, label }) => {
  return (
    <StyledSkillIconWithTextWrapper>
      <StyledSkillIconWithTextImage
        fluid={fluid}
        imgStyle={{
          objectFit: 'contain'
        }}
      />
      <StyledSkillIconWithTextLabel
        style={label === 'WooCommerce' ? { fontSize: '1.2rem' } : {}}
      >
        {label}
      </StyledSkillIconWithTextLabel>
    </StyledSkillIconWithTextWrapper>
  )
}

export default SkillIconWithText