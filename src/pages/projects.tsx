import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectThumbnail from '../components/ProjectThumbnail'
import { ChevronsContext } from '../themes/themeContext'

const ProjectsPage = () => (
  <ChevronsContext.Provider value={{ leftLink: '/', rightLink: '/blog' }}>
    <Layout
      isFooterVisible={true}
    >
      <SEO title="Projects" />
      <ProjectThumbnail />
    </Layout>
  </ChevronsContext.Provider>
)

export default ProjectsPage
