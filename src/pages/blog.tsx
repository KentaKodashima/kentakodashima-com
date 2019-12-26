import React from 'react'

import { ChevronsContext, PaddingTopContext } from '../themes/contexts'
import {
  Layout,
  PageTitle,
  ArticleList,
  SEO,
  VerticalScrollIndicator
} from '../components'

const BlogPage = () => {
  return (
    <PaddingTopContext.Provider value={{ removePaddingTop: false }}>
      <ChevronsContext.Provider 
        value={{ 
          leftLink: '/projects',
          rightLink: '/about',
          leftLinkText: 'Projects',
          rightLinkText: 'About Me'
        }}>
        <Layout
          isFooterVisible={true}
        >
          <SEO title='My Blog' />
          <PageTitle 
            title='My Blog'
          />
          <VerticalScrollIndicator />
          <ArticleList />
        </Layout>
      </ChevronsContext.Provider>
    </PaddingTopContext.Provider>
  )
}

export default BlogPage
