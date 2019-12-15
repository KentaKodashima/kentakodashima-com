import React, { useState, useEffect } from 'react'

export const PageTransitionContext = React.createContext({
  direction: '',
  provideDirection: (direction: string) => {},
  location: Object
})

export const TransitionProvider = ({ children, location }) => {
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

  console.log(location, 'location in provider')

  return (
    <PageTransitionContext.Provider
        value={{
          direction,
          provideDirection: provideDirection,
          location
        }}
      >
        {children}
    </PageTransitionContext.Provider>
  )
}