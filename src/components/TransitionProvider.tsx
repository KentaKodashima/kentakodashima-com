import React, { useState, useEffect, FunctionComponent } from 'react'

import Transition from './Transition'
import { LocationType } from '../themes/types'

export const PageTransitionContext = React.createContext({
  direction: '',
  provideDirection: (direction: string) => {},
  location: {}
})

type TransitionProviderProps = {
  location: LocationType
}

export const TransitionProvider: FunctionComponent<TransitionProviderProps> = ({ children, location }) => {
  const [direction, setDirection] = useState('')

  const provideDirection = (direction: string) => {
    localStorage.setItem('direction', JSON.stringify(direction))
    setDirection(direction)
  }

  useEffect(() => {
    const direction = JSON.parse(localStorage.getItem('direction'))
    if (direction) {
      setDirection(direction)
    }
  }, [])

  return (
    <PageTransitionContext.Provider
      value={{
        direction,
        provideDirection,
        location
      }}
    >
      <Transition>
        {children}
      </Transition>
    </PageTransitionContext.Provider>
  )
}