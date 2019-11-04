import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import projectThumbnailStyles from '../scss/components/ProjectThumbnail.module.scss'
import Container from './Container'

type ProjectThumbnailProps = {
  project: {
    title: string,
    alt: string,
    image: string,
    description: string
  }
}

const ProjectThumbnail = () => {
  const data = useStaticQuery(graphql`
    query {
      thumbnailImage: file(relativePath: { eq: "thumbnail-web.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={projectThumbnailStyles.thumbnailWrapper}>
      <a 
        href="#"
        className={projectThumbnailStyles.thumbnailAnchorStyle}
      >
        <Img
          title='Thumbnail Image'
          alt='Thumbnail Image'
          fluid={data.thumbnailImage.childImageSharp.fluid}
          imgStyle={{
            objectFit: 'contain'
          }}
        />
        <div className={projectThumbnailStyles.thumbnailTextWrapper}>
          <h4 
            className={projectThumbnailStyles.thumbnailTextTitle}
          >
            QESurvey
          </h4>
          <p 
            className={projectThumbnailStyles.thumbnailTextDescription}
          >
            React + NodeJS
          </p>
        </div>
      </a>
    </div>
  )
}

export default ProjectThumbnail
