import React from 'react'
import * as sectionStyles from '../scss/Section.module.scss'

const Section = ({ sectionId, children }) => {
  return (
    <section className={sectionStyles.sectionWrapper} id={sectionId}>
      {children}
    </section>
  )
}

export default Section