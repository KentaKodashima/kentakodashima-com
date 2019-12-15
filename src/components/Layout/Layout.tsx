import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { MarginTopContext } from '../../themes/themeContext'
import { GlobalStyle } from './GlobalStyle'
import { Theme } from '../../themes/Theme'
import { StyledLayoutMain } from './Layout.styled'
import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container'
import Chevrons from '../Chevrons'
import Transition from '../Transition'

type LayoutProps = {
  isFooterVisible: boolean
  className?: string
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
    <Transition>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="wrapper">
          <Header siteTitle={data.site.siteMetadata.title} />
          <MarginTopContext.Consumer>
            {({ removeMarginTop }) => (
              <StyledLayoutMain
                removeMarginTop={removeMarginTop}
              >
                <Chevrons />
                <Container>
                  {children}
                </Container>
              </StyledLayoutMain>
            )}
          </MarginTopContext.Consumer>
          { isFooterVisible &&
            <Footer />
          }
        </div>
      </ThemeProvider>
    </Transition>
  )
}

export default Layout
