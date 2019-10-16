import React from 'react'
import { Link } from 'gatsby'

import indexPageStyle from '../scss/pages/IndexPage.module.scss'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Container from '../components/Container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexPageStyle.heroText}>
      <h2>Kenta Kodashima</h2>
      <h3>Full-stack Developer</h3>
    </div>
    <div className={indexPageStyle.heroImage}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
