import styled from 'styled-components'

import { ThemeType } from '../../themes/theme'

type StyledFooterProps = {
  theme: ThemeType
}

export const StyledFooter = styled.footer`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 80px;
  margin-bottom: 16px;
`

export const StyledCredit = styled.div`
  font-size: 1.1rem;
  margin-top: 8px;

  >a:visited {
    color: ${({ theme }: StyledFooterProps) => theme.colors.accent};
  }
`