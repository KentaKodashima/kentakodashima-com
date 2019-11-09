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

const Footer = () => {
  const [isVisible, setIsVidible] = useState(false)

  return (
    <footer className={footerStyle.footer}>
      <ul className={footerStyle.socialIconsWrapper}>
        <li>
          <a href="https://github.com/KentaKodashima">
            <FontAwesomeIcon className={footerStyle.socialIcon} icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@KentaKodashima">
            <FontAwesomeIcon className={footerStyle.socialIcon} icon={faMediumM} />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/kenta-kodashima">
            <FontAwesomeIcon className={footerStyle.socialIcon} icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/kenta.kodashima.5">
            <FontAwesomeIcon className={footerStyle.socialIcon} icon={faFacebookF} />
          </a>
        </li>
      </ul>
      <Container>© {new Date().getFullYear()} Kenta Kodashima</Container>
    </footer>
  )
}

export default Footer
