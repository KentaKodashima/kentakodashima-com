import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import '../scss/components/Layout.scss'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'
import Chevrons from './Chevrons'

type LayoutProps = {
  isFooterVisible: boolean
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    isFooterVisible,
    children
  } = props

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Chevrons />
        <Container>
          {children}
        </Container>
      </main>
      { isFooterVisible &&
        <Footer />
      }
    </div>
  )
}

export default Layout
