import styled from 'styled-components'

import { ThemeType } from '../../themes/theme'

type StyledLinkButtonProps = {
  theme: ThemeType
}

export const StyledLinkButton = styled.a<StyledLinkButtonProps>`
  display: inline-block;
  border: none;
  padding: 16px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.base };
  background-color: ${({ theme }) => theme.colors.accent };
  font-size: ${({ theme }) => theme.fontSize.body };
  font-weight: bold;
  text-decoration: none;
`