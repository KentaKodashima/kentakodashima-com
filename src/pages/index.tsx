import React from 'react'

import indexPageStyle from '../scss/pages/index.module.scss'
import {
  Layout,
  SEO
} from '../components'
import CatImg from '../images/hero-cat.svg'
import { ChevronsContext, MarginTopContext } from '../themes/contexts'

const IndexPage = () => {
  return (
    <MarginTopContext.Provider value={{ removeMarginTop: true }}>
      <ChevronsContext.Provider 
        value={{ 
          leftLink: undefined, 
          rightLink: '/projects',
          leftLinkText: undefined,
          rightLinkText: 'Projects'
        }}
      >
        <Layout
          isFooterVisible={false}
        >
          <SEO title='Home' />
          <div className={indexPageStyle.heroText}>
            <h2 className={indexPageStyle.heroTitle}>Kenta Kodashima</h2>
            <h3 className={indexPageStyle.heroSubTitle}>Full-Stack Developer</h3>
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
