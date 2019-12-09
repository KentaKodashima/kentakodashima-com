import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
import { css, keyframes } from 'styled-components'

const foldLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0) rotateY(0deg);
  }
  to {
    transform: translate3d(-100%, 0, 0)
      rotateY(calc(var(--fold-out-angle) * -1));
  }
`

const duration = 500

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    // animation: `${foldLeft} ${duration}ms ease-in-out`,
  },
}

type TransitionProps = {
  location: {
    pathname: string
  }
}

class Transition extends React.PureComponent<TransitionProps> {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          // Transition duration
          timeout={{
            enter: duration,
            exit: duration,
          }}
        >
          {
          // Apply animation depending on the status
          status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
