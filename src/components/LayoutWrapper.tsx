import React from 'react'

import Transition from './Transition'


const LayoutWrapper = ({ children, location }) => {
  return (
    <Transition location={location}>
      {children}
    </Transition>
  )
}

export default LayoutWrapper