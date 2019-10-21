import React from 'react'

import indexPageStyle from '../scss/pages/IndexPage.module.scss'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import CatImg from '../images/hero-cat.svg'

const IndexPage = () => {
  const leftChevronLink = ''
  const rightChevronLink = ''

  return (
    <Layout
      isFooterVisible={false}
    >
      <SEO title="Home" />
      <div className={indexPageStyle.heroText}>
        <h2>Kenta Kodashima</h2>
        <h3>Full-stack Developer</h3>
      </div>
      <div className={indexPageStyle.heroImage}>
        <img src={CatImg} />
      </div>
    </Layout>
  )
}

export default IndexPage
