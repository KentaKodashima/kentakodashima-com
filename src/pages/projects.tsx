import React from 'react'
import { Link } from 'gatsby'

import { ChevronsContext, MarginTopContext } from '../themes/themeContext'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ProjectList from '../components/ProjectList'
import PageTitle from '../components/PageTitle'
import Tab from '../components/Tab'

const ProjectsPage = () => (
  <MarginTopContext.Provider value={{ removeMarginTop: false }}>
    <ChevronsContext.Provider value={{ leftLink: '/', rightLink: '/blog' }}>
      <Layout
        isFooterVisible={true}
      >
        <SEO title="Projects" />
        <PageTitle 
          title='Projects'
        />
        <Tab 
          tabItems={['All', 'Mobile', 'Web']}
        />
        <ProjectList />
      </Layout>
    </ChevronsContext.Provider>
  </MarginTopContext.Provider>
)

export default ProjectsPage
