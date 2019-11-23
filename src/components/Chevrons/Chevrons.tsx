import React, { FunctionComponent, useState } from 'react'

// import arrowStyle from '../scss/components/Chevrons.module.scss'
import { Link } from 'gatsby'
import { ChevronsContext } from '../../themes/themeContext'
import { 
  StyledChevron,
  StyledChevronLeftLink,
  StyledChevronRightLink,
  StyledChevronLeftArrowBar,
  StyledChevronRightArrowBar
} from './Chevrons.styled'

const Chevrons: FunctionComponent = () => {
  return (
    <StyledChevron>
      <ChevronsContext.Consumer>
        {({ leftLink }) => (
          leftLink &&
          <StyledChevronLeftLink 
            to={leftLink}
          >
            <StyledChevronLeftArrowBar />
          </StyledChevronLeftLink>
        )}
      </ChevronsContext.Consumer>
      <ChevronsContext.Consumer>
        {({ rightLink }) => (
          rightLink &&
          <StyledChevronRightLink
            to={rightLink}
          >
            <StyledChevronRightArrowBar />
          </StyledChevronRightLink>
        )}
      </ChevronsContext.Consumer>
    </StyledChevron>
  )
}

export default Chevrons
