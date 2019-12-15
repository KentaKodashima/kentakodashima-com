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
import { formatMonth } from '../../utils/helpers'

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
  /**
   * Add '...' at the end of a long text.
   * @param { string } text - The string to format.
   * @returns { string } - The formatted string.
  */
  const _formatExcerpt = (text: string) => {
    const excerptMaxLength = 90
    let formattedString: string

    if (text.length > excerptMaxLength) {
      formattedString = text.substring(0, excerptMaxLength)
      return formattedString + '...'
    }

    return text
  }

  /**
   * Format the date to display.
   * @param { string } dateString - The date string to format.
   * @returns { string } - The formatted date string.
  */
  const _formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const monthNumber: number = date.getMonth()+1
    const monthString: string = formatMonth(monthNumber)
    const formattedString = `${date.getDate()} ${monthString}, ${date.getFullYear()}`
  
    return formattedString
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
            {_formatDate(article.date)}
          </ArticleThumbnailTextDescription>
          <ArticleThumbnailBar />
          <ArticleThumbnailTextDescription>
            {_formatExcerpt(article.intro)}
          </ArticleThumbnailTextDescription>
        </ArticleThumbnailTextWrapper>
      </ArticleThumbnailAnchor>
    </ArticleThumbnailWrapper>
  )
}

export default ArticleThumbnail
