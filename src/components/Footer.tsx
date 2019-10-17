import React, { useState } from 'react'

import footerStyle from '../scss/components/Footer.module.scss'
import Container from './Container'

const Footer = () => {
  const [isVisible, setIsVidible] = useState(false)

  return (
    <footer className={footerStyle.footer}>
      <Container>© {new Date().getFullYear()} Kenta Kodashima</Container>
    </footer>
  )
}

export default Footer
