import React, { FunctionComponent } from 'react'

import {
  Layout,
  SEO,
  PageTitle,
  ProjectDetailMainImages,
  ProjectDetailSection
} from '../components'
import Img from 'gatsby-image'
import { PaddingTopContext } from '../themes/contexts'
import { ProjectType } from '../themes/types'

type ProjectDetailPageProps = {
  location: {
    state: ProjectType
  }
}


const ProjectDetailPage: FunctionComponent<ProjectDetailPageProps> = ({ location: { state } }) => {
  const _renderSingleMainImage = (image: any) => {
    return (
      <div>
        <Img
          title={state.title}
          alt={state.title}
          fluid={{ ...image.childImageSharp.fluid }}
        />
      </div>
    )
  }

  const _renderMainImages = (mainImages: any[]) => {
    return (
      mainImages.map((image) => {
        return (
          <Img
            title={state.title}
            alt={state.title}
            fluid={{ ...image.childImageSharp.fluid }}
          />
        )
      })
    )
  }
  
  return (
    <PaddingTopContext.Provider value={{ removePaddingTop: false }}>
      <Layout
        isFooterVisible={true}
      >
        { state &&
          <React.Fragment>
            <SEO title={state.title} />
            <PageTitle title={state.title} />
            <ProjectDetailMainImages state={state} />
            <ProjectDetailSection title='About this project' about={state.about} />
            <ProjectDetailSection title='Technologies' technologies={state.technologies} />
          </React.Fragment>
        }
      </Layout>
    </PaddingTopContext.Provider>
  )
}

export default ProjectDetailPage
