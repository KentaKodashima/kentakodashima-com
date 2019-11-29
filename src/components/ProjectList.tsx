import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import projectListStyles from '../scss/components/ProjectList.module.scss'
import ProjectThumbnail from './ProjectThumbnail'

type ProjectListProps = {
  projectListItems: string[]
}

// const ProjectList: FunctionComponent<ProjectListProps> = ({ projectListItems }) => {
const ProjectList: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/src\/pages\/projects)/.*\\.md$/"}}) {
        edges {
          node {
            frontmatter {
              about
              app_links {
                app_link {
                  link_type
                  url
                }
              }
              category_type
              date
              github_link
              technologies
              title
              url
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              extra_images {
                image
              }
              main_images {
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
      {/* <ProjectThumbnail />
      <ProjectThumbnail />
      <ProjectThumbnail />
      <ProjectThumbnail /> */}
      {
        projectNodes.map(({ node: { frontmatter: project } }) => {
          return <ProjectThumbnail key={project.id} project={project}/>
        })
      }
    </div>
  )
}

export default ProjectList