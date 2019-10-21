import React, { FunctionComponent, useState } from 'react'

import arrowStyle from '../scss/components/Chevrons.module.scss'

type ChevronsProps = {
  leftChevronLink: string,
  rightChevronLink: string
}

const Chevrons: FunctionComponent<ChevronsProps> = ({ leftChevronLink, rightChevronLink }) => {
  const [isLeftVisible, setIsLeftVisible] = useState(true)
  const [isRightVisible, setIsRightVisible] = useState(true)

  return (
    <div className={arrowStyle.arrowsWrapper}>
      <a 
        className={arrowStyle.leftArrow} 
        href={leftChevronLink}
      >
        <span className={arrowStyle.leftArrowBar}></span>
      </a>
      <a 
        className={arrowStyle.rightArrow} 
        href={rightChevronLink}
      >
        <span className={arrowStyle.rihgtArrowBar}></span>
      </a>
    </div>
  )
}

export default Chevrons
