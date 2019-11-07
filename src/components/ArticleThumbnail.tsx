import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import articleThumbnailStyles from '../scss/components/ArticleThumbnail.module.scss'
import Container from './Container'

type ArticleThumbnailProps = {
  project: {
    title: string,
    alt: string,
    image: string,
    description: string
  }
}

const ArticleThumbnail = () => {
  const data = useStaticQuery(graphql`
    query {
      thumbnailImage: file(relativePath: { eq: "blog-thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={articleThumbnailStyles.thumbnailWrapper}>
      <a 
        href="#"
        className={articleThumbnailStyles.thumbnailAnchorStyle}
      >
        <Img
          title='Thumbnail Image'
          alt='Thumbnail Image'
          fluid={data.thumbnailImage.childImageSharp.fluid}
          imgStyle={{
            objectFit: 'contain'
          }}
        />
        <div className={articleThumbnailStyles.thumbnailTextWrapper}>
          <h4 
            className={articleThumbnailStyles.thumbnailTextTitle}
          >
            QESurvey
          </h4>
          <p 
            className={articleThumbnailStyles.thumbnailTextDescription}
          >
            April 29, 2019
          </p>
          <span></span>
          <p 
            className={articleThumbnailStyles.thumbnailTextDescription}
          >
            React + NodeJS
          </p>
        </div>
      </a>
    </div>
  )
}

export default ArticleThumbnail
