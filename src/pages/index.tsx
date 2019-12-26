import React from 'react'

import indexPageStyle from '../scss/pages/index.module.scss'
import {
  Layout,
  SEO
} from '../components'
import CatImg from '../images/hero-cat.svg'
import { ChevronsContext, PaddingTopContext } from '../themes/contexts'

const IndexPage = props => {
  console.log(props, 'index props')
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
        </Layout>
      </ChevronsContext.Provider>
    </PaddingTopContext.Provider>
  )
}

export default IndexPage
