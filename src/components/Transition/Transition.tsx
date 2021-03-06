import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { PageTransitionContext } from '../TransitionProvider'
import { PageTransitionContextType } from '../../themes/types'
import { theme } from '../../themes/theme'

const duration = theme.constants.DURATION

const rightVariants = {
  initial: {
    translateX: '100%',
    translateZ: '0'
  },
  enter: {
    translateX: '0%',
    transition: {
      duration: duration,
      delay: duration * 2,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
    transitionEnd: {
      translateX: 0,
      translateZ: 0
    }
  },
  exit: {
    translateX: '-100%',
    transition: {
      duration: duration,
      delay: duration
    }
  },
}

const leftVariants = {
  initial: {
    translateX: '-100%',
    translateZ: '0'
  },
  enter: {
    translateX: '0%',
    transition: {
      duration: duration,
      delay: duration * 2,
      when: 'beforeChildren',
      staggerChildren: 0.3
    },
    transitionEnd: {
      translateX: 0,
      translateZ: 0
    }
  },
  exit: {
    translateX: '100%',
    transition: {
      duration: duration,
      delay: duration
    }
  },
}

class Transition extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <PageTransitionContext.Consumer>
        {(context: PageTransitionContextType) => (
          context.direction ?
          <AnimatePresence>
            <motion.div
              key={context.location.pathname}
              variants={context.direction === 'right' ? rightVariants : leftVariants}
              initial='initial'
              animate='enter'
              exit='exit'
            >
              {children}
            </motion.div>
          </AnimatePresence>
          :
          <AnimatePresence>
            <motion.div
              key={context.location.pathname}
              initial='initial'
              animate='enter'
              exit='exit'
            >
              {children}
            </motion.div>
          </AnimatePresence>
        )}
      </PageTransitionContext.Consumer>
    )
  }
}

export default Transition
