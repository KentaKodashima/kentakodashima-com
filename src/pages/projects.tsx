import React from 'react'
import { Link } from 'gatsby'

import { ChevronsContext, PaddingTopContext } from '../themes/contexts'
import {
  Layout,
  ProjectList,
  PageTitle,
  SEO,
  Tab
} from '../components'

const ProjectsPage = () => (
  <PaddingTopContext.Provider value={{ removePaddingTop: false }}>
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
  </PaddingTopContext.Provider>
)

export default ProjectsPage
