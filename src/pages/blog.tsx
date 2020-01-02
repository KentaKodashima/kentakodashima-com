import React from 'react'

import { ChevronsContext, PaddingTopContext } from '../themes/contexts'
import {
  Layout,
  PageTitle,
  ArticleList,
  SEO,
  VerticalScrollIndicator,
  LinkButton
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
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <LinkButton
              href='https://medium.com/@KentaKodashima'
              title='View all articles from me on Medium'
            />
          </div>
        </Layout>
      </ChevronsContext.Provider>
    </PaddingTopContext.Provider>
  )
}

export default BlogPage
