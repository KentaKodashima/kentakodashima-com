import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ProjectThumbnail from '../components/ProjectThumbnail'

const ProjectsPage = () => (
  <Layout
    isFooterVisible={true}
    leftChevronLink=''
    rightChevronLink=''
  >
    <SEO title="Projects" />
    <ProjectThumbnail />
  </Layout>
)

export default ProjectsPage
