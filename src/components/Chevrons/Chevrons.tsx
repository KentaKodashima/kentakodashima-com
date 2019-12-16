import React, { FunctionComponent } from 'react'

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

const Chevrons: FunctionComponent = () => {
  return (
    <PageTransitionContext.Consumer>
      {(context: PageTransitionContextType) => (
        <StyledChevron>
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
      )}
    </PageTransitionContext.Consumer>
  )
}

export default Chevrons
