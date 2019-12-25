import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { ThemeType } from '../../themes/theme'

type StyledNavMenuProps = {
  open?: boolean,
  theme: ThemeType
}

export const StyledNavMenu = styled.nav<StyledNavMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.base};
  transition: 0.3s ease-in-out;
  opacity: ${({ open }) => open ? 1 : 0};
  transform: ${({ open }) => open ? 'translate(0, 0)' : 'translate(100%, -100%)'};
`

export const StyledNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.navMenu};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
  }

  ${({ theme }: StyledNavMenuProps) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      font-size: ${({ theme }) => theme.fontSize.mobile.navMenu};
    }
  `}
`