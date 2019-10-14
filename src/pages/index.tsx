import React from "react"
import { Link } from "gatsby"

import indexPageStyle from "../scss/pages/IndexPage.module.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Kenta Kodashima</h2>
    <h3>Full-stack Developer</h3>
    <div 
      className={indexPageStyle.heroImage}
    >
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
