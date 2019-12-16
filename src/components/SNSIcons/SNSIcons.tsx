import React, { FunctionComponent } from "react"
import { 
  faGithub,
  faMediumM,
  faLinkedinIn,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'

import { StyledSNSIcons, StyledFontAwesomeIcon } from './SNSIcons.styled'

const Container: FunctionComponent = () => {
  return (
    <StyledSNSIcons>
      <li>
        <a href="https://github.com/KentaKodashima">
          <StyledFontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://medium.com/@KentaKodashima">
          <StyledFontAwesomeIcon icon={faMediumM} />
        </a>
      </li>
      <li>
        <a href="www.linkedin.com/in/kenta-kodashima">
          <StyledFontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/kenta.kodashima.5">
          <StyledFontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
    </StyledSNSIcons>
  )
}

export default Container