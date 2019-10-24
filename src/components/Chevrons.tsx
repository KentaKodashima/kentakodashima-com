import React, { FunctionComponent, useState } from 'react'

import arrowStyle from '../scss/components/Chevrons.module.scss'
import { Link } from 'gatsby'
import { ChevronsContext } from '../themes/themeContext'

const Chevrons: FunctionComponent = () => {
  return (
    <div className={arrowStyle.arrowsWrapper}>
      <ChevronsContext.Consumer>
        {({ leftLink }) => (
          leftLink &&
          <Link 
            className={arrowStyle.leftArrow} 
            to={leftLink}
          >
            <span className={arrowStyle.leftArrowBar}></span>
          </Link>
        )}
      </ChevronsContext.Consumer>
      <ChevronsContext.Consumer>
        {({ rightLink }) => (
          rightLink &&
          <Link
            className={arrowStyle.rightArrow} 
            to={rightLink}
          >
            <span className={arrowStyle.rihgtArrowBar}></span>
          </Link>
        )}
      </ChevronsContext.Consumer>
    </div>
  )
}

export default Chevrons
