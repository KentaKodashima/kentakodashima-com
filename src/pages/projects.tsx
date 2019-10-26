import React from 'react'
import { Link } from 'gatsby'

import projectsPageStyles from '../scss/pages/ProjectsPage.module.scss'
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
      <div className={projectsPageStyles.thumbnailWrapper}>
        <ProjectThumbnail />
        <ProjectThumbnail />
        <ProjectThumbnail />
      </div>
    </Layout>
  </ChevronsContext.Provider>
)

export default ProjectsPage
