import React, { FunctionComponent } from "react"

import { StyledContainer } from './Container.styled'

type ContainerProps = {
  className?: string
}

const Container: FunctionComponent<ContainerProps> = ({ className, children }) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  )
}

export default Container