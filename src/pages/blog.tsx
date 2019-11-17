import React from 'react'
import { Link, graphql } from 'gatsby'

import { ChevronsContext, MarginTopContext } from '../themes/themeContext'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle/PageTitle'
import ArticleList from '../components/ArticleList'

const BlogPage = () => {
  // const blogPageQuery = graphql`

  // `

  return (
    <MarginTopContext.Provider value={{ removeMarginTop: false }}>
      <ChevronsContext.Provider value={{ leftLink: '/projects', rightLink: '/contact' }}>
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
