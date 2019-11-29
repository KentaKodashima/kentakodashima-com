import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import projectThumbnailStyles from '../scss/components/ProjectThumbnail.module.scss'
import Container from './Container'

type ProjectThumbnailProps = {
  projectObj: {
    node: {
      childMarkdownRemark: {
        frontmatter: {
          title: string
          category_type: string
          thumbnail: {
            childImageSharp: {
              fluid: {
                
              }
            }
          }
          thumbnail_subtitle: string
          main_images: []
          app_links: {
            app_link: {
              link_type: string
              url: string
            }
          }
          github_link: string
          about: string
          technologies: string
          extra_images?: []
        }
      }
    }
  }
}

const ProjectThumbnail: FunctionComponent<ProjectThumbnailProps> = ({ projectObj }) => {
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

  const { node: { childMarkdownRemark: { frontmatter: project } } } = projectObj

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
            {project.title}
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
