import styled from 'styled-components'
import { Link } from 'gatsby'

import { ThemeType } from '../../themes/Theme'

type StyledNavMenuProps = {
  open: boolean,
  theme: ThemeType
}

export const StyledNavMenu = styled.nav<StyledNavMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.base};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }) => open ? 'translate(0, 0)' : 'translate(100%, -100%)'};
`

export const StyledNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizeNavMenu};
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
`