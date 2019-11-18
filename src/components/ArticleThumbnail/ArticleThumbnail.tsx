import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import articleThumbnailStyles from '../scss/components/ArticleThumbnail.module.scss'
import { 
  ArticleThumbnailWrapper,
  ArticleThumbnailAnchor,
  ArticleThumbnailTextWrapper,
  ArticleThumbnailTextTitle,
  ArticleThumbnailTextDescription,
  ArticleThumbnailBar
} from './ArticleThumbnail.styled'

type ArticleThumbnailProps = {
  article: {
    title: string
    url: string
    date: string
    intro: string
    thumbnail: {
      childImageSharp: {
        fluid: any
      }
    }
  }
}

const ArticleThumbnail: FunctionComponent<ArticleThumbnailProps> = ({ article }) => {
  return (
    <ArticleThumbnailWrapper>
      <ArticleThumbnailAnchor 
        href={article.url}
      >
        <Img
          title='Thumbnail Image'
          alt='Thumbnail Image'
          fluid={article.thumbnail.childImageSharp.fluid}
          imgStyle={{
            objectFit: 'contain'
          }}
        />
        <ArticleThumbnailTextWrapper>
          <ArticleThumbnailTextTitle>
            {article.title}
          </ArticleThumbnailTextTitle>
          <ArticleThumbnailTextDescription>
            {article.date}
          </ArticleThumbnailTextDescription>
          <ArticleThumbnailBar />
          <ArticleThumbnailTextDescription>
            {article.intro}
          </ArticleThumbnailTextDescription>
        </ArticleThumbnailTextWrapper>
      </ArticleThumbnailAnchor>
    </ArticleThumbnailWrapper>
  )
}

export default ArticleThumbnail
