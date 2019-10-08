import React from 'react'
import pageTitleStyles from '../scss/PageTitle.module.scss'

const PageTitle = ({ children }) => {
  return (
    <h2 className={pageTitleStyles.sectionWrapper}>
      {children}
    </h2>
  )
}

export default PageTitle