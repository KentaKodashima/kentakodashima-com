/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'

import { TransitionProvider } from './src/components'

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <TransitionProvider {...props}>
      {element}
    </TransitionProvider>
  )
}

const transitionDelay = 500 * 2
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}