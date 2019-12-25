import React, { FunctionComponent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { ChevronsContext } from '../../themes/contexts'
import { PageTransitionContextType } from '../../themes/types'
import { PageTransitionContext } from '../TransitionProvider'
import { 
  StyledChevron,
  StyledChevronLeftLink,
  StyledChevronRightLink,
  StyledChevronLeftArrowBar,
  StyledChevronRightArrowBar,
  StyledChevronLeftText,
  StyledChevronRightText
} from './Chevrons.styled'

const duration = 0.6

const variants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: [0, 0.5, 1],
    transition: {
      duration: duration,
      delay: duration * 2,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    }
  },
  exit: {
    opacity: 0
  }
}

const Chevrons: FunctionComponent = () => {
  return (
    <PageTransitionContext.Consumer>
      {(context: PageTransitionContextType) => (
        <AnimatePresence>
          <StyledChevron
            key={context.location.pathname}
            variants={variants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            <ChevronsContext.Consumer>
              {({ leftLink, leftLinkText }) => (
                leftLink &&
                <StyledChevronLeftLink 
                  to={leftLink}
                  onClick={() => {
                    context.provideDirection('left')
                  }}
                >
                  <StyledChevronLeftText>{leftLinkText}</StyledChevronLeftText>
                  <StyledChevronLeftArrowBar />
                </StyledChevronLeftLink>
              )}
            </ChevronsContext.Consumer>
            <ChevronsContext.Consumer>
              {({ rightLink, rightLinkText }) => (
                rightLink &&
                <StyledChevronRightLink
                  to={rightLink}
                  onClick={() => {
                    context.provideDirection('right')
                  }}
                >
                  <StyledChevronRightText>{rightLinkText}</StyledChevronRightText>
                  <StyledChevronRightArrowBar />
                </StyledChevronRightLink>
              )}
            </ChevronsContext.Consumer>
          </StyledChevron>
        </AnimatePresence>
      )}
    </PageTransitionContext.Consumer>
  )
}

export default Chevrons
