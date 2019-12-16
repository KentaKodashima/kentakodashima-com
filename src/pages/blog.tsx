import React from 'react'

import { ChevronsContext, MarginTopContext } from '../themes/contexts'
import {
  Layout,
  PageTitle,
  ArticleList,
  SEO
} from '../components'

const BlogPage = () => {
  return (
    <MarginTopContext.Provider value={{ removeMarginTop: false }}>
      <ChevronsContext.Provider 
        value={{ 
          leftLink: '/projects',
          rightLink: '/contact',
          leftLinkText: 'Projects',
          rightLinkText: 'Contact'
        }}>
        <Layout
          isFooterVisible={true}
        >
          <SEO title='My Blog' />
          <PageTitle 
            title='My Blog'
          />
          <ArticleList />
        </Layout>
      </ChevronsContext.Provider>
    </MarginTopContext.Provider>
  )
}

export default BlogPage
