import React from 'react'

export const ChevronsContext = React.createContext({
  leftLink: '',
  rightLink: '',
  leftLinkText: '',
  rightLinkText: ''
})

export const MarginTopContext = React.createContext({
  removeMarginTop: false
})