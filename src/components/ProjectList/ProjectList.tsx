import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { StyledProjectListWrapper } from './ProjectList.styled'
import { ProjectThumbnail } from '../ProjectThumbnail'

const ProjectList: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/src\/pages\/projects)/.*\\.md$/"}}, sort: {fields: frontmatter___priority}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              priority
              categoryType
              thumbnail {
                id
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              mainImages {
                id
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              extraImages {
                id
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              thumbnailSubtitle
              appLinks {
                appLink {
                  linkType
                  url
                }
              }
              about
              technologies
            }    
          }
        }
      }
    }
  `)
  const { edges: projectNodes } = data.allMarkdownRemark

  return (
    <StyledProjectListWrapper>
      {projectNodes.map(({ node }) => {
        return <ProjectThumbnail key={node.frontmatter.thumbnail.id} project={node.frontmatter} slug={node.fields.slug} />
      })}
    </StyledProjectListWrapper>
  )
}

export default ProjectList
