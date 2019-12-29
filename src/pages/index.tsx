import React from 'react'

import indexPageStyle from '../scss/pages/index.module.scss'
import {
  Layout,
  SEO
} from '../components'
import CatImg from '../images/hero-cat.svg'
import { ChevronsContext, PaddingTopContext } from '../themes/contexts'

const IndexPage = props => {
  return (
    <PaddingTopContext.Provider value={{ removePaddingTop: true }}>
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
          {/* <div className={indexPageStyle.credit}>
            The cool cat image is created by my awesome designer friend, <a href='http://katherinexz.com/' target='_blank'>Katherine Zhang</a>.
          </div> */}
        </Layout>
      </ChevronsContext.Provider>
    </PaddingTopContext.Provider>
  )
}

export default IndexPage
