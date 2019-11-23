import React, { FunctionComponent, useState } from 'react'

// import arrowStyle from '../scss/components/Chevrons.module.scss'
import { Link } from 'gatsby'
import { ChevronsContext } from '../../themes/themeContext'
import { 
  StyledChevron,
  StyledChevronLeftLink,
  StyledChevronRightLink,
  StyledChevronLeftArrowBar,
  StyledChevronRightArrowBar,
  StyledChevronLeftText,
  StyledChevronRightText
} from './Chevrons.styled'

const Chevrons: FunctionComponent = () => {
  return (
    <StyledChevron>
      <ChevronsContext.Consumer>
        {({ leftLink, leftLinkText }) => (
          leftLink &&
          <StyledChevronLeftLink 
            to={leftLink}
          >
            <StyledChevronLeftText>{leftLinkText}</StyledChevronLeftText>
            <StyledChevronLeftArrowBar />
          </StyledChevronLeftLink>
        )}
      </ChevronsContext.Consumer>
      <ChevronsContext.Consumer>
        {({ rightLink, rightLinkText }) => (
          rightLink &&
          <StyledChevronRightLink
            to={rightLink}
          >
            <StyledChevronRightText>{rightLinkText}</StyledChevronRightText>
            <StyledChevronRightArrowBar />
          </StyledChevronRightLink>
        )}
      </ChevronsContext.Consumer>
    </StyledChevron>
  )
}

export default Chevrons
