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
                  A Full-Stack Developer with 2 years of experience.
                </h3>
                <div className={aboutStyles.separator}></div>
                <p className={aboutStyles.paragraph}>
                  Hi, I’m Kenta, a passionate and responsible developer who strives to come up with the best solution under the given conditions.
                </p>
                <p className={aboutStyles.paragraph}>
                  I find the meaning of my existance in helping people around me, so I have been mentoring my friends to learn HTML/CSS, ES6, React, etc.
                </p>
                <p className={aboutStyles.paragraph}>
                  I also have published more than 25 articles on Medium. Some of my articles got some attentions enough to receive over 200 claps with over 12.2k views.
                </p>
                <p className={aboutStyles.paragraph}>
                  Aside from technologies, I enjoy studying Philosophy and playing piano.
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