import React, { FunctionComponent, Dispatch, SetStateAction } from 'react'

import { 
  StyledNavMenu,
  StyledNavLink
} from './NavMenu.styled'
import { PageTransitionContext } from '../TransitionProvider'
import { PageTransitionContextType } from '../../themes/types'

type NavMenuProps = {
  open: boolean
}

const NavMenu: FunctionComponent<NavMenuProps> = ({ open }) => {
  return (
    <PageTransitionContext.Consumer>
      {(context: PageTransitionContextType) => (
        <StyledNavMenu
          open={open}
        >
          <StyledNavLink
            to='/'
            activeStyle={{ display: 'none' }}
            onClick={() => {
              context.provideDirection('right')
            }}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to='/projects'
            activeStyle={{ display: 'none' }}
            onClick={() => {
              context.provideDirection('right')
            }}
          >
            Projects
          </StyledNavLink>
          <StyledNavLink 
            to='/blog'
            activeStyle={{ display: 'none' }} 
            onClick={() => {
              context.provideDirection('right')
            }}
          >
            Blog
          </StyledNavLink>
          <StyledNavLink
            to='/about'
            activeStyle={{ display: 'none' }}
            onClick={() => {
              context.provideDirection('right')
            }}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to='/contact'
            activeStyle={{ display: 'none' }}
            onClick={() => {
              context.provideDirection('right')
            }}
          >
            Contact
          </StyledNavLink>
        </StyledNavMenu>
      )}
    </PageTransitionContext.Consumer>
  )
}

export default NavMenu