import React, { FunctionComponent } from 'react'

import {
  Layout,
  SEO,
  PageTitle,
  ProjectDetailMainImages,
  ProjectDetailSection,
  ProjectLinkButtons,
  ProjectExtraImagesSection
} from '../components'
import { PaddingTopContext } from '../themes/contexts'
import { ProjectType } from '../themes/types'

type ProjectDetailPageProps = {
  location: {
    state: ProjectType
  }
}


const ProjectDetailPage: FunctionComponent<ProjectDetailPageProps> = ({ location: { state } }) => {  
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
            <ProjectLinkButtons appLinks={state.appLinks} />
            <ProjectDetailSection title='About this project' about={state.about} />
            <ProjectDetailSection title='Technologies' technologies={state.technologies} />
            { state.extraImages && state.extraImages.length > 0 &&
              <ProjectExtraImagesSection  sectionTitle='Extra Images' imageTitle={state.title} extraImages={state.extraImages} />
            }
          </React.Fragment>
        }
      </Layout>
    </PaddingTopContext.Provider>
  )
}

export default ProjectDetailPage
