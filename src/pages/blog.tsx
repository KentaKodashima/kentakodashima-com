import React from "react"
import { Link } from "gatsby"

import { ChevronsContext } from '../themes/themeContext'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle/PageTitle'
import ArticleList from '../components/ArticleList'

const BlogPage = () => {
  return (
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
  )
}

export default BlogPage
