import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
    <div>
      <div>
        <Img
          title='Thumbnail Image'
          alt='Thumbnail Image'
          fluid={data.thumbnailImage.childImageSharp.fluid}
        />
      </div>
      <div>
        <h4>QESurvey</h4>
        <p>React + NodeJS</p>
      </div>
    </div>
  )
}

export default ProjectThumbnail
