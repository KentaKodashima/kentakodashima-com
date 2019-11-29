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
    query projectsQuery  {
      allFile(filter: {sourceInstanceName: {regex: "/projects/"}}) {
        edges {
          node {
            childMarkdownRemark {
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
    }
  `)
  const { edges: projects } = data.allFile

  return (
    <div className={projectListStyles.thumbnailWrapper}>
      {/* <ProjectThumbnail />
      <ProjectThumbnail />
      <ProjectThumbnail />
      <ProjectThumbnail /> */}
      {
        projects.map((projectObj) => {
          return <ProjectThumbnail projectObj={projectObj}/>
        })
      }
    </div>
  )
}

export default ProjectList