import React, { FunctionComponent } from 'react'
import { StyledPageTitle } from './PageTitle.styled'

type PageTitleProps = {
  title: string
}

const PageTitle: FunctionComponent<PageTitleProps> = ({ title }) => {
  return (
    <StyledPageTitle>
      {title}
    </StyledPageTitle>
  )
}

export default PageTitle