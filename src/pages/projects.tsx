import React from 'react'
import { Link } from 'gatsby'

import projectsPageStyles from '../scss/pages/ProjectsPage.module.scss'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ProjectList from '../components/ProjectList'
import { ChevronsContext } from '../themes/themeContext'

const ProjectsPage = () => (
  <ChevronsContext.Provider value={{ leftLink: '/', rightLink: '/blog' }}>
    <Layout
      isFooterVisible={true}
    >
      <SEO title="Projects" />
      <ProjectList />
    </Layout>
  </ChevronsContext.Provider>
)

export default ProjectsPage
