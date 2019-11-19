import React from 'react'
import { Link } from 'gatsby'

import { 
  StyledNavMenu,
  StyledNavLink
} from './NavMenu.styled'

const NavMenu = ({ open }) => {
  return (
    <StyledNavMenu
      open={open}
    >
      <StyledNavLink to='/'>
        Home
      </StyledNavLink>
      <StyledNavLink to='/projects'>
        Projects
      </StyledNavLink>
      <StyledNavLink to='/blog'>
        Blog
      </StyledNavLink>
      <StyledNavLink to='/contact'>
        Contact
      </StyledNavLink>
    </StyledNavMenu>
  )
}

export default NavMenu