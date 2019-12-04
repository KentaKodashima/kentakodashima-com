import styled from 'styled-components'
import { ThemeType } from '../../themes/Theme'

type StyledPageTitleProps = {
  theme: ThemeType
}

export const StyledPageTitle = styled.h2<StyledPageTitleProps>`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 7.2rem;
  text-align: center;
  margin-bottom: 4.8rem;
`