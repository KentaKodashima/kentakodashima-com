import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { SkillIconWithText } from '../SkillIconWithText'
import {
  StyledSkillsSectionWrapper,
  StyledSkillsSectionContentWrapper,
  StyledSkillsSectionContextBox,
  StyledSkillsSectionIconsWrapper
} from './SkillsSection.styled'
import { BrandsType } from './types'

const SkillsSection = () => {
  const brands: BrandsType = useStaticQuery(graphql`
    fragment brandsChildImageSharpFragment on File {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    query {
      alibabaCloudLogo: file(relativePath: { eq: "brands/alibaba_cloud_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      androidLogo: file(relativePath: { eq: "brands/android_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      apolloLogo: file(relativePath: { eq: "brands/apollo_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      appleLogo: file(relativePath: { eq: "brands/apple_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      awsLogo: file(relativePath: { eq: "brands/aws_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      css3Logo: file(relativePath: { eq: "brands/css3_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      dockerLogo: file(relativePath: { eq: "brands/docker_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      ecmascriptLogo: file(relativePath: { eq: "brands/ecmascript_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      expoLogo: file(relativePath: { eq: "brands/expo_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      firebaseLogo: file(relativePath: { eq: "brands/firebase_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      gatsbyLogo: file(relativePath: { eq: "brands/gatsby_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      gitLogo: file(relativePath: { eq: "brands/git_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      githubLogo: file(relativePath: { eq: "brands/github_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      gitlabLogo: file(relativePath: { eq: "brands/gitlab_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      graphqlLogo: file(relativePath: { eq: "brands/graphql_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      gulpLogo: file(relativePath: { eq: "brands/gulp_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      html5Logo: file(relativePath: { eq: "brands/html5_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      javaLogo: file(relativePath: { eq: "brands/java_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      jestLogo: file(relativePath: { eq: "brands/jest_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      jwtLogo: file(relativePath: { eq: "brands/jwt_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      mongodbLogo: file(relativePath: { eq: "brands/mongodb_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      netlifyLogo: file(relativePath: { eq: "brands/netlify_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      nodejsLogo: file(relativePath: { eq: "brands/nodejs_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      photoshopLogo: file(relativePath: { eq: "brands/photoshop_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      postgresqlLogo: file(relativePath: { eq: "brands/postgresql_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      reactLogo: file(relativePath: { eq: "brands/react_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      realmLogo: file(relativePath: { eq: "brands/realm_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      reduxLogo: file(relativePath: { eq: "brands/redux_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      sassLogo: file(relativePath: { eq: "brands/sass_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      sketchLogo: file(relativePath: { eq: "brands/sketch_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      styledComponentsLogo: file(relativePath: { eq: "brands/styled_components_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      swiftLogo: file(relativePath: { eq: "brands/swift_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      typescriptLogo: file(relativePath: { eq: "brands/typescript_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      woocommerceLogo: file(relativePath: { eq: "brands/woocommerce_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
      wordpressLogo: file(relativePath: { eq: "brands/wordpress_logo.png" }) {
        ...brandsChildImageSharpFragment
      }
    }
  `)
  
  return (
    <StyledSkillsSectionWrapper>
      <h3>Technologies I use</h3>
      <StyledSkillsSectionContentWrapper>
        <StyledSkillsSectionContextBox>
          <h4>Frontend</h4>
          <StyledSkillsSectionIconsWrapper>
            <SkillIconWithText
              fluid={brands.typescriptLogo.childImageSharp.fluid}
              label='Typescript'
            />
            <SkillIconWithText
              fluid={brands.ecmascriptLogo.childImageSharp.fluid}
              label='Javascript / ES'
            />
            <SkillIconWithText
              fluid={brands.reactLogo.childImageSharp.fluid}
              label='React'
            />
            <SkillIconWithText
              fluid={brands.reduxLogo.childImageSharp.fluid}
              label='Redux'
            />
            <SkillIconWithText
              fluid={brands.apolloLogo.childImageSharp.fluid}
              label='Apollo GraphQL'
            />
            <SkillIconWithText
              fluid={brands.gatsbyLogo.childImageSharp.fluid}
              label='Gatsby.js'
            />
            <SkillIconWithText
              fluid={brands.netlifyLogo.childImageSharp.fluid}
              label='Netlify CMS'
            />
            <SkillIconWithText
              fluid={brands.styledComponentsLogo.childImageSharp.fluid}
              label='Styled Components'
            />
            <SkillIconWithText
              fluid={brands.html5Logo.childImageSharp.fluid}
              label='HTML'
            />
            <SkillIconWithText
              fluid={brands.css3Logo.childImageSharp.fluid}
              label='CSS'
            />
            <SkillIconWithText
              fluid={brands.sassLogo.childImageSharp.fluid}
              label='Sass'
            />
            <SkillIconWithText
              fluid={brands.wordpressLogo.childImageSharp.fluid}
              label='WordPress'
            />
            <SkillIconWithText
              fluid={brands.woocommerceLogo.childImageSharp.fluid}
              label='WooCommerce'
            />
          </StyledSkillsSectionIconsWrapper>
        </StyledSkillsSectionContextBox>
        <StyledSkillsSectionContextBox>
          <h4>Backend</h4>
          <StyledSkillsSectionIconsWrapper>
            <SkillIconWithText
              fluid={brands.nodejsLogo.childImageSharp.fluid}
              label='Node.js / Express.js'
            />
            <SkillIconWithText
              fluid={brands.jwtLogo.childImageSharp.fluid}
              label='JWT'
            />
            <SkillIconWithText
              fluid={brands.graphqlLogo.childImageSharp.fluid}
              label='GraphQL'
            />
            <SkillIconWithText
              fluid={brands.postgresqlLogo.childImageSharp.fluid}
              label='PostgreSQL'
            />
            <SkillIconWithText
              fluid={brands.mongodbLogo.childImageSharp.fluid}
              label='MongoDB'
            />
            <SkillIconWithText
              fluid={brands.firebaseLogo.childImageSharp.fluid}
              label='Firebase'
            />
            <SkillIconWithText
              fluid={brands.alibabaCloudLogo.childImageSharp.fluid}
              label='Alibaba Cloud'
            />
            <SkillIconWithText
              fluid={brands.awsLogo.childImageSharp.fluid}
              label='AWS'
            />
          </StyledSkillsSectionIconsWrapper>
        </StyledSkillsSectionContextBox>
        <StyledSkillsSectionContextBox>
          <h4>Mobile</h4>
          <StyledSkillsSectionIconsWrapper>
            <SkillIconWithText
              fluid={brands.reactLogo.childImageSharp.fluid}
              label='React Native'
            />
            <SkillIconWithText
              fluid={brands.expoLogo.childImageSharp.fluid}
              label='Expo'
            />
            <SkillIconWithText
              fluid={brands.appleLogo.childImageSharp.fluid}
              label='iOS'
            />
            <SkillIconWithText
              fluid={brands.swiftLogo.childImageSharp.fluid}
              label='Swift'
            />
            <SkillIconWithText
              fluid={brands.androidLogo.childImageSharp.fluid}
              label='Android'
            />
            <SkillIconWithText
              fluid={brands.javaLogo.childImageSharp.fluid}
              label='Java'
            />
            <SkillIconWithText
              fluid={brands.realmLogo.childImageSharp.fluid}
              label='Realm'
            />
          </StyledSkillsSectionIconsWrapper>
        </StyledSkillsSectionContextBox>
        <StyledSkillsSectionContextBox>
          <h4>Tools</h4>
          <StyledSkillsSectionIconsWrapper>
            <SkillIconWithText
              fluid={brands.jestLogo.childImageSharp.fluid}
              label='Jest.js'
            />
            <SkillIconWithText
              fluid={brands.dockerLogo.childImageSharp.fluid}
              label='Docker'
            />
            <SkillIconWithText
              fluid={brands.gulpLogo.childImageSharp.fluid}
              label='Gulp.js'
            />
            <SkillIconWithText
              fluid={brands.gitLogo.childImageSharp.fluid}
              label='Git'
            />
            <SkillIconWithText
              fluid={brands.githubLogo.childImageSharp.fluid}
              label='GitHub'
            />
            <SkillIconWithText
              fluid={brands.gitlabLogo.childImageSharp.fluid}
              label='GitLab'
            />
            <SkillIconWithText
              fluid={brands.sketchLogo.childImageSharp.fluid}
              label='Sketch'
            />
            <SkillIconWithText
              fluid={brands.photoshopLogo.childImageSharp.fluid}
              label='Photoshop'
            />
          </StyledSkillsSectionIconsWrapper>
        </StyledSkillsSectionContextBox>
      </StyledSkillsSectionContentWrapper>
    </StyledSkillsSectionWrapper>
  )
}

export default SkillsSection