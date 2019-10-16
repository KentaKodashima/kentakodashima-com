import React from 'react'

import footerStyle from '../scss/components/Footer.module.scss'
import Container from './Container'

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <Container>© {new Date().getFullYear()} Kenta Kodashima</Container>
    </footer>
  )
}

export default Footer
