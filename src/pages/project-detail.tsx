import React, { FunctionComponent } from 'react'

import {
  Layout,
  SEO,
  PageTitle,
  ProjectDetailMainImages,
  ProjectDetailSection
} from '../components'
import Img from 'gatsby-image'
import { MarginTopContext } from '../themes/themeContext'
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
    <MarginTopContext.Provider value={{ removeMarginTop: false }}>
      <Layout
        isFooterVisible={true}
      >
        <SEO title={state ? state.title : ''} />
        <PageTitle title={state ? state.title : ''} />
        <ProjectDetailMainImages state={state} />
        <ProjectDetailSection title='About this project' about={state ? state.about : ''} />
        <ProjectDetailSection title='Technologies' technologies={state ? state.technologies : []} />
      </Layout>
    </MarginTopContext.Provider>
  )
}

export default ProjectDetailPage
