import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { StyledProjectListWrapper } from './ProjectList.styled'
import ProjectThumbnail from '../ProjectThumbnail'

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
                  fluid(maxWidth: 200, maxHeight: 150) {
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
    <StyledProjectListWrapper>
      {
        projectNodes.map(({ node: { frontmatter: project } }) => {
          return <ProjectThumbnail key={project.thumbnail.id} project={project}/>
        })
      }
    </StyledProjectListWrapper>
  )
}

export default ProjectList