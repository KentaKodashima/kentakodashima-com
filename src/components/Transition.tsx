import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
import styled, { css, keyframes } from 'styled-components'

import { PageTransitionContext } from '../components/TransitionProvider'
import { PageTransitionContextType } from '../themes/types'

const duration = 3000

const leftExit = keyframes`
  50% {
    animation-timing-function: cubic-bezier(0, 0.2, 0.2, 1);
    transform: translateX(-50%) translateZ(-225px) rotateY(-45deg);
  }
  100% {
    transform: translateX(-100%) rotateY(-90deg);
  }
`

const rightExit = keyframes`
  50% {
    animation-timing-function: cubic-bezier(0, 0.2, 0.2, 1);
    transform: translateX(50%) translateZ(var(-225px)) rotateY(45deg);
  }
  100% {
    transform: translateX(100%) rotateY(90deg);
  }
`

const leftEnter = keyframes`
  50% {
    transform: translateX(100%) rotateY(90deg);
  }
  100% {
    animation-timing-function: cubic-bezier(0, 0.2, 0.2, 1);
    transform: translateX(50%) translateZ(-225px) rotateY(45deg);
  }
`

const rightEnter = keyframes`
  0% {
    transform: translateX(100%) rotateY(-90deg);
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0.2, 0.2, 1);
    transform: translateX(50%) translateZ(-225px) rotateY(-45deg);
  }
`

type StyledDivProps = {
  status: string
  direction: string
}

const StyledDiv = styled.div<StyledDivProps>`
  ${({ status, direction }) => (status === 'entering' && direction === 'right') && css`
    transform-origin: 0% 50%;
    animation: ${rightEnter} ${duration}ms;
  `}

  ${({ status, direction }) => (status === 'exiting' && direction === 'right') && css`
    transform-origin: 0% 50%;
    animation: ${rightExit} ${duration}ms;
  `}

  ${({ status, direction }) => (status === 'entering' && direction === 'left') && css`
    transform-origin: 100% 50%;
    animation: ${leftEnter} ${duration}ms;
  `}

  ${({ status, direction }) => (status === 'exiting' && direction === 'left') && css`
    transform-origin: 100% 50%;
    animation: ${leftExit} ${duration}ms;
  `}
`

class Transition extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <PageTransitionContext.Consumer>
        {(context: PageTransitionContextType) => (
          <TransitionGroup>
            <ReactTransition
              key={context.location.pathname}
              timeout={{
                enter: duration,
                exit: duration,
              }}
            >
              {(status: string) => (
                <StyledDiv status={status} direction={context.direction}>
                  {children}
                </StyledDiv>
              )}
            </ReactTransition>
          </TransitionGroup>
        )}
      </PageTransitionContext.Consumer>
    )
  }
}

export default Transition
