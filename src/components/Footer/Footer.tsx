import React, { useState } from 'react'

import { StyledFooter } from './Footer.styled'
import Container from '../Container'
import SNSIcons from '../SNSIcons'

const Footer = () => {
  return (
    <StyledFooter>
      <SNSIcons />
      <Container>© {new Date().getFullYear()} Kenta Kodashima</Container>
    </StyledFooter>
  )
}

export default Footer
