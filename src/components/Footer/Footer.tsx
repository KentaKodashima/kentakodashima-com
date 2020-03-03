import React, { useState } from 'react'

import { StyledFooter, StyledCredit } from './Footer.styled'
import Container from '../Container'
import SNSIcons from '../SNSIcons'

const Footer = () => {
  return (
    <StyledFooter>
      <SNSIcons />
      <Container>© {new Date().getFullYear()} Kenta Kodashima</Container>
      <Container>
        <StyledCredit>
          The cool cats on this website are created by my awesome designer friend, <a href='http://katherinexz.com/' target='_blank'>Katherine Zhang</a>.
        </StyledCredit>
      </Container>
    </StyledFooter>
  )
}

export default Footer
