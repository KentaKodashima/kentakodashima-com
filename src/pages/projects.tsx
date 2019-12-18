import React from 'react'
import { Link } from 'gatsby'

import { ChevronsContext, MarginTopContext } from '../themes/contexts'
import {
  Layout,
  ProjectList,
  PageTitle,
  SEO,
  Tab
} from '../components'

const ProjectsPage = () => (
  <MarginTopContext.Provider value={{ removeMarginTop: false }}>
    <ChevronsContext.Provider 
      value={{
        leftLink: '/',
        rightLink: '/blog',
        leftLinkText: 'Home',
        rightLinkText: 'Blog'
      }}>
      <Layout
        isFooterVisible={true}
      >
        <SEO title="Projects" />
        <PageTitle 
          title='Projects'
        />
        {/* <Tab
          tabItems={['All', 'Mobile', 'Web']}
        /> */}
        <ProjectList />
      </Layout>
    </ChevronsContext.Provider>
  </MarginTopContext.Provider>
)

export default ProjectsPage
