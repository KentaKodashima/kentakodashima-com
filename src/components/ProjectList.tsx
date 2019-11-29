import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import projectListStyles from '../scss/components/ProjectList.module.scss'
import ProjectThumbnail from './ProjectThumbnail'

const ProjectList: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/src\/pages\/projects)/.*\\.md$/"}}) {
        edges {
          node {
            frontmatter {
              title
              category_type
              thumbnail {
                id
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              thumbnail_subtitle
              main_images {
                image
              }
              app_links {
                app_link {
                  link_type
                  url
                }
              }
              github_link
              about
              technologies
              extra_images {
                image
              }
            }    
          }
        }
      }
    }
  `)
  const { edges: projectNodes } = data.allMarkdownRemark

  return (
    <div className={projectListStyles.thumbnailWrapper}>
      {
        projectNodes.map(({ node: { frontmatter: project } }) => {
          return <ProjectThumbnail key={project.thumbnail.id} project={project}/>
        })
      }
    </div>
  )
}

export default ProjectList