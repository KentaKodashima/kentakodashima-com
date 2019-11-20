import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
  const _excerptFormatter = (text: string) => {
    const excerptMaxLength = 90
    let formattedString: string

    if (text.length > excerptMaxLength) {
      formattedString = text.substring(0, excerptMaxLength)
      return formattedString + '...'
    }

    return text
  }

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
            {_excerptFormatter(article.intro)}
          </ArticleThumbnailTextDescription>
        </ArticleThumbnailTextWrapper>
      </ArticleThumbnailAnchor>
    </ArticleThumbnailWrapper>
  )
}

export default ArticleThumbnail
