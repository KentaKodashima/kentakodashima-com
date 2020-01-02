import React, { useState } from 'react'
import { Link } from 'gatsby'
import { AnimatePresence } from 'framer-motion'

import { PageTransitionContextType } from '../../themes/types'
import { PageTransitionContext } from '../TransitionProvider'
import BurgerButton from '../BurgerButton'
import NavMenu from '../NavMenu'
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderContentWrapper,
  StyledHeaderLogo
} from './Header.styled'
import { theme } from '../../themes/theme'

const duration = theme.constants.DURATION

const variants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: [0, 0.5, 1],
    transition: {
      duration: duration,
      delay: duration * 3,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    }
  },
  exit: {
    opacity: 0
  }
}

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <PageTransitionContext.Consumer>
      {(context: PageTransitionContextType) => (
        context.direction ?
        <AnimatePresence>
          <StyledHeader
            key={context.location.pathname}
            variants={variants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            <NavMenu
              open={open}
            />
            <StyledHeaderContainer>
              <StyledHeaderContentWrapper>
                <div>
                  <StyledHeaderLogo>
                    <Link
                      to="/"
                      style={{
                        color: `black`,
                        textDecoration: `none`,
                        fontSize: '50px'
                      }}
                    >
                      K
                    </Link>
                  </StyledHeaderLogo>
                </div>
                <BurgerButton 
                  open={open}
                  setOpen={setOpen}
                />
              </StyledHeaderContentWrapper>
            </StyledHeaderContainer>
          </StyledHeader>
        </AnimatePresence>
        :
        <AnimatePresence>
          <StyledHeader
            key={context.location.pathname}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            <NavMenu
              open={open}
            />
            <StyledHeaderContainer>
              <StyledHeaderContentWrapper>
                <div>
                  <StyledHeaderLogo>
                    <Link
                      to="/"
                      style={{
                        color: `black`,
                        textDecoration: `none`,
                        fontSize: '50px'
                      }}
                    >
                      K
                    </Link>
                  </StyledHeaderLogo>
                </div>
                <BurgerButton 
                  open={open}
                  setOpen={setOpen}
                />
              </StyledHeaderContentWrapper>
            </StyledHeaderContainer>
          </StyledHeader>
        </AnimatePresence>
      )}
    </PageTransitionContext.Consumer>
  )
}

export default Header
