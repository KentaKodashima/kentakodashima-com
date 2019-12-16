import styled, { css } from 'styled-components'
import { ThemeType } from '../../themes/theme'

type StyledContainerProps = {
  theme: ThemeType
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  width: 70%;
  margin: 0 auto;

  ${({ theme }: StyledContainerProps) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      width: 80%;
    }
  `}
`