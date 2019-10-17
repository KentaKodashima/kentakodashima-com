import React, { useState } from 'react'

import arrowStyle from '../scss/components/Chevrons.module.scss'

const Chevrons: React.FunctionComponent = () => {
  const [isLeftVisible, setIsLeftVisible] = useState(true)
  const [isRightVisible, setIsRightVisible] = useState(true)

  return (
    <div className={arrowStyle.arrowsWrapper}>
      <a className={arrowStyle.leftArrow} href="">
        <span className={arrowStyle.leftArrowBar}></span>
      </a>
      <a className={arrowStyle.rightArrow} href="">
        <span className={arrowStyle.rihgtArrowBar}></span>
      </a>
    </div>
  )
}

export default Chevrons
