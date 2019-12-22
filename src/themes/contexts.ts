import React from 'react'

export const ChevronsContext = React.createContext({
  leftLink: '',
  rightLink: '',
  leftLinkText: '',
  rightLinkText: ''
})

export const PaddingTopContext = React.createContext({
  removePaddingTop: false
})