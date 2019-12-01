import React from 'react'

import { ChevronsContext, MarginTopContext } from '../themes/themeContext'
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
          <SEO title="Blog" />
          <PageTitle 
            title='Blog'
          />
          <ArticleList />
        </Layout>
      </ChevronsContext.Provider>
    </MarginTopContext.Provider>
  )
}

export default BlogPage
