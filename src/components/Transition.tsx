import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
import styled, { css, keyframes } from 'styled-components'

import { PageTransitionContext } from '../components/TransitionProvider'

const leftExit = keyframes`
  50% {
    transform: translateX(-50%) translateZ(-225px) rotateY(-45deg);
  }
  100% {
    transform: translateX(-100%) rotateY(-90deg);
  }
`

const rightExit = keyframes`
  50% {
    transform: translateX(50%) translateZ(var(-225px)) rotateY(45deg);
  }
  100% {
    transform: translateX(100%) rotateY(90deg);
  }
`

const leftEnter = keyframes`
  50% {
    transform: translateX(50%) translateZ(-225px) rotateY(45deg);
  }
  100% {
    transform: translateX(-100%) rotateY(-90deg);
  }
`

const rightEnter = keyframes`
  50% {
    transform: translateX(-50%) translateZ(-225px) rotateY(-45deg);
  }
  100% {
    transform: translateX(100%) rotateY(90deg);
  }
`

const exit = keyframes`
  50% {
    transform: translateZ(-50%);
  }
  100% {
    transform: translateZ(-100%);
  }
`

const duration = 1000

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    // animation: css`${leftExit} ${duration}ms`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${duration}ms ease-in-out`,
    // opacity: 1,
  },
  exiting: {
    transition: `all ${duration}ms ease-in-out`,
    // animation: css`${leftExit} ${duration}ms`,
    opacity: 0,
  },
}

type StyledDivProps = {
  status: string
  direction: string
}

const StyledDiv = styled.div<StyledDivProps>`
  ${({ status, direction }) => (status === 'entering' && direction === 'right') && css`
    animation: ${rightEnter} ${duration}ms;
  `}

  ${({ status }) => status === 'entered' && css`
    transition: ${duration}ms ease-in-out;
  `}

  ${({ status }) => status === 'exiting' && css`
    animation: ${rightExit} ${duration}ms;
  `}
`

class Transition extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <PageTransitionContext.Consumer>
        { context => (
            <TransitionGroup>
              {console.log(context, 'context')}
              <ReactTransition
                key={context.location.pathname}
                timeout={{
                  enter: duration,
                  exit: duration,
                }}
              >
                {
                // Apply animation depending on the status
                status => (
                  <StyledDiv status={status} direction={context.direction}>
                    {children}
                  </StyledDiv>
                )}
              </ReactTransition>
            </TransitionGroup>
          )
        }
      </PageTransitionContext.Consumer>
    )
  }
}

export default Transition
