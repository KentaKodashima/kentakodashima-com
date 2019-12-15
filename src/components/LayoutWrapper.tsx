import React from 'react'

import Transition from './Transition'


const LayoutWrapper = ({ children, location, direction }) => {
  return (
    <Transition location={location} direction={direction}>
      {children}
    </Transition>
    // <PageTransitionContext.Consumer>
    //   {({ direction }) => (
    //     // direction &&
    //     <Transition location={location} direction={direction}>
    //       {console.log(direction, 'direction')}
    //       {children}
    //     </Transition>
    //   )}
    // </PageTransitionContext.Consumer>
  )
}

export default LayoutWrapper