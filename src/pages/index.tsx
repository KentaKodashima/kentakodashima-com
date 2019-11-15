import React from 'react'

import indexPageStyle from '../scss/pages/index.module.scss'
import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/SEO'
import CatImg from '../images/hero-cat.svg'
import { ChevronsContext, MarginTopContext } from '../themes/themeContext'

const IndexPage = () => {
  return (
    <MarginTopContext.Provider value={{ removeMarginTop: true }}>
      <ChevronsContext.Provider value={{ leftLink: undefined, rightLink: '/projects' }}>
        <Layout
          isFooterVisible={false}
        >
          <SEO title="Home" />
          <div className={indexPageStyle.heroText}>
            <h2>Kenta Kodashima</h2>
            <h3>Full-Stack Developer</h3>
          </div>
          <div className={indexPageStyle.heroImage}>
            <img src={CatImg} />
          </div>
        </Layout>
      </ChevronsContext.Provider>
    </MarginTopContext.Provider>
  )
}

export default IndexPage
