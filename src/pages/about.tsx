import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import aboutStyles from '../scss/pages/about.module.scss'
import { ChevronsContext, PaddingTopContext } from '../themes/contexts'
import {
  Layout,
  PageTitle,
  SEO,
  VerticalScrollIndicator,
  SkillsSection
} from '../components'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile_img.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
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
          <VerticalScrollIndicator />
          <div className={aboutStyles.contentWrapper}>
            <section className={aboutStyles.profileSectionWrapper}>
              <div className={aboutStyles.leftCol}>
                <Img
                  fluid={data.profileImage.childImageSharp.fluid}
                />
              </div>
              <div className={aboutStyles.rightCol}>
                <h3 className={aboutStyles.sectionTitle}>
                  A Full-Stack Developer with over 2 years of experience.
                </h3>
                <div className={aboutStyles.separator}></div>
                <p className={aboutStyles.paragraph}>
                  Hi, I’m Kenta, a passionate developer who loves figuring out efficient logics to deliver the best products.
                </p>
                <p className={aboutStyles.paragraph}>
                  In order to contribute to the developer community, I constantly write articles on Medium. Some of my articles got some attention enough to receive over 200 claps with over 12.2k views.
                </p>
                <p className={aboutStyles.paragraph}>
                  Aside from technologies, I enjoy studying philosophy and playing the piano.
                </p>
              </div>
            </section>
            <SkillsSection />
          </div>
        </Layout>
      </ChevronsContext.Provider>
    </PaddingTopContext.Provider>
  )
}

export default AboutPage