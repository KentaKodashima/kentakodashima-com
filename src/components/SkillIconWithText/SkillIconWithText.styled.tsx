import styled, { css } from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'

import { ThemeType } from '../../themes/theme'

type Props = {
  theme: ThemeType
}

export const StyledSkillIconWithTextWrapper = styled.div`
  flex: 0 1 20%;
  margin: 0 4px 24px;
  text-align: center;

  ${({ theme }: Props) => css`
    @media screen and (max-width: ${theme.breakPoint.mobileLandMax}) {
      flex: 0 1 40%;
    } 
  `}
`

export const StyledSkillIconWithTextImage = styled(Img)`
  width: 100%;
  height: 50px;
  text-align: center;
  margin-bottom: 8px;
`

export const StyledSkillIconWithTextLabel = styled.p<Props>`
  font-size: ${({ theme }: Props) => theme.fontSize.body}
`