import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { LinkTypes } from '../../utils/constants'
import {
  StyledProjectLinksButtonWrapper,
  StyledAppStoreLinkButton,
  StyledGooglePlayLinkButton,
  StyledProjectLinkButton,
  StyledGithubIcon
} from './ProjectLinkButtons.styled'

type ProjectLinkButtonsProps = {
  appLinks: [{
    appLink: {
      linkType: string
      url: string
    }
  }]
}

const ProjectLinkButtons: FunctionComponent<ProjectLinkButtonsProps> = ({ appLinks }) => {
  const data = useStaticQuery(graphql`
    query {
      app_store_badge: file(relativePath: { eq: "app-store-badge.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      google_play_badge: file(relativePath: { eq: "google-play-badge.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data, 'image data')

  const _renderButton = (linkType: string, url: string): JSX.Element => {
    switch (linkType) {
      case LinkTypes.ios:
        return (
          <StyledAppStoreLinkButton>
            <a href={url}>
              <Img fluid={data.app_store_badge.childImageSharp.fluid} />
            </a>
          </StyledAppStoreLinkButton>
        )
      case LinkTypes.android:
        return (
          <StyledGooglePlayLinkButton>
            <a href={url}>
              <Img fluid={data.google_play_badge.childImageSharp.fluid} />
            </a>
          </StyledGooglePlayLinkButton>
        )
      case LinkTypes.web:
        return (
          <StyledProjectLinkButton>
            <a href={url}>
              Visit Website
            </a>
          </StyledProjectLinkButton>
        )
      case LinkTypes.github:
        return (
          <StyledProjectLinkButton>
            <a href={url}>
              <StyledGithubIcon icon={faGithub} />Src on GitHub
            </a>
          </StyledProjectLinkButton>
        )
      default:
        break
    }
  }

  return (
    <StyledProjectLinksButtonWrapper>
      {
        appLinks.map(appLink => {
          return _renderButton(appLink.appLink.linkType, appLink.appLink.url)
        })
      }
    </StyledProjectLinksButtonWrapper>
  )
}

export default ProjectLinkButtons