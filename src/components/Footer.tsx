import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub,
  faMediumM,
  faLinkedinIn,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'

import footerStyle from '../scss/components/Footer.module.scss'
import Container from './Container'
import SNSIcons from './SNSIcons'

const Footer = () => {
  const [isVisible, setIsVidible] = useState(false)

  return (
    <footer className={footerStyle.footer}>
      <SNSIcons />
      <Container>© {new Date().getFullYear()} Kenta Kodashima</Container>
    </footer>
  )
}

export default Footer
