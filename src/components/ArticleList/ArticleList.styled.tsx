import styled, { css } from 'styled-components'
import { ThemeType } from '../../themes/theme'

type StyledArticleListProps = {
  theme: ThemeType
}

export const StyledArticleList = styled.div<StyledArticleListProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }: StyledArticleListProps) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  `}
`