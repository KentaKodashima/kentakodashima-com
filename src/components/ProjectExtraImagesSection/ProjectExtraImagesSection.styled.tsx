import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { ThemeType } from '../../themes/theme'

type Props = {
  theme: ThemeType
}

export const StyledProjectExtraImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  margin-bottom: 40px;

  ${({ theme }: Props) => css`
    @media screen and (max-width: ${theme.breakPoint.mobileLandMax}) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  `}
`

export const StyledGatsbyImage = styled(Img)`
  flex: 1;
  margin: 0 5px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);

  ${({ theme }: Props) => css`
    @media screen and (max-width: ${theme.breakPoint.mobileLandMax}) {
      margin: 5px 0;
    }
  `}
`