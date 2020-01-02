import React, { FunctionComponent } from 'react'

import { StyledLinkButton } from './LinkButton.styled'

type LinkButtonProps = {
  href: string
  title: string
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({ href, title }) => {
  return (
    <StyledLinkButton href={href}>
      {title}
    </StyledLinkButton>
  )
}

export default LinkButton