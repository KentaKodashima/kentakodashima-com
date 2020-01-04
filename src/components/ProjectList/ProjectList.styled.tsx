import styled, { css } from 'styled-components'
import { ThemeType } from '../../themes/theme'

type StyledProjectListWrapperProps = {
  theme: ThemeType
}

export const StyledProjectListWrapper = styled.div<StyledProjectListWrapperProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ theme }: StyledProjectListWrapperProps) => css`
    @media screen and (max-width: ${theme.breakPoint.mobileLandMax}) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  `}
`