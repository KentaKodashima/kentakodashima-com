import React, { FunctionComponent } from 'react'

import {
  Layout,
  SEO,
  PageTitle,
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
  return (
    <MarginTopContext.Provider value={{ removeMarginTop: false }}>
      <Layout
        isFooterVisible={true}
      >
        <SEO title={state ? state.title : ''} />
        <PageTitle title={state ? state.title : ''} />
        {/* <div>
          { 
            state.main_images.map(({ image }) => {
              console.log(image)
              return <img src={image} alt="Image"/>
            })
          }
        </div> */}
        <ProjectDetailSection title='About this project' body={state.about} />
        <ProjectDetailSection title='Technologies' body={state.technologies} />
      </Layout>
    </MarginTopContext.Provider>
  )
}

export default ProjectDetailPage
