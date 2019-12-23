import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import aboutStyles from '../scss/pages/about.module.scss'
import { ChevronsContext, PaddingTopContext } from '../themes/contexts'
import {
  Layout,
  PageTitle,
  SEO
} from '../components'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile_img.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <PaddingTopContext.Provider value={{ removePaddingTop: false }}>
      <ChevronsContext.Provider 
        value={{ 
          leftLink: '/blog', 
          rightLink: '/contact',
          leftLinkText: 'Blog',
          rightLinkText: 'Contact'
        }}
      >
        <Layout
          isFooterVisible={true}
        >
          <SEO title="About Me" />
          <PageTitle
            title='About Me'
          />
          <div className={aboutStyles.contentWrapper}>
            <div className={aboutStyles.leftCol}>
              <Img
                fluid={data.profileImage.childImageSharp.fluid}
              />
            </div>
            <div className={aboutStyles.rightCol}>
              <h3 className={aboutStyles.sectionTitle}>
                A Full-Stack Developer with about 2 years of experience.
              </h3>
              <div className={aboutStyles.separator}></div>
              <p className={aboutStyles.paragraph}>
                Hi, I’m Kenta.
              </p>
              <p className={aboutStyles.paragraph}>
                As a passionate and responsible developer, I strive to come up with the best solutions under the given conditions.
              </p>
              <p className={aboutStyles.paragraph}>
                I have engaged in a lot of exciting projects using technologies such as React Native, React, Node/Express, GraphQL, PostgreSQL, WordPress, Sass, jQuery etc.
              </p>
              <p className={aboutStyles.paragraph}>
                I find the meaning in my existance when I can help people.
              </p>
              <p className={aboutStyles.paragraph}>
                Aside from technologies, I enjoy studying Philosophy and playing piano.
              </p>
            </div>
          </div>
        </Layout>
      </ChevronsContext.Provider>
    </PaddingTopContext.Provider>
  )
}

export default AboutPage