import React from 'react'

import { 
  StyledNavMenu,
  StyledNavLink
} from './NavMenu.styled'

const NavMenu = ({ open }) => {
  return (
    <StyledNavMenu
      open={open}
    >
      <StyledNavLink
        to='/'
        activeStyle={{ display: 'none' }}
      >
        Home
      </StyledNavLink>
      <StyledNavLink
        to='/projects'
        activeStyle={{ display: 'none' }}
      >
        Projects
      </StyledNavLink>
      <StyledNavLink 
        to='/blog'
        activeStyle={{ display: 'none' }} 
      >
        Blog
      </StyledNavLink>
      <StyledNavLink
        to='/about'
        activeStyle={{ display: 'none' }}
      >
        About
      </StyledNavLink>
      <StyledNavLink
        to='/contact'
        activeStyle={{ display: 'none' }}
      >
        Contact
      </StyledNavLink>
    </StyledNavMenu>
  )
}

export default NavMenu