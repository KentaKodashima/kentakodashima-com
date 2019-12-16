import styled, { css } from 'styled-components'
import { ThemeType } from '../../themes/theme'

type StyledPageTitleProps = {
  theme: ThemeType
}

export const StyledPageTitle = styled.h2<StyledPageTitleProps>`
  color: ${({ theme }: StyledPageTitleProps) => theme.colors.accent};
  font-size: ${({ theme }: StyledPageTitleProps) => theme.fontSize.pageTitle};
  text-align: center;
  margin-bottom: 4.8rem;

  ${({ theme }: StyledPageTitleProps) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      font-size: ${({ theme }: StyledPageTitleProps) => theme.fontSize.mobile.pageTitle};
    }
  `}
`