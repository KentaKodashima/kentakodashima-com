/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { LayoutWrapper } from './src/components'

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <LayoutWrapper {...props}>{element}</LayoutWrapper>
}