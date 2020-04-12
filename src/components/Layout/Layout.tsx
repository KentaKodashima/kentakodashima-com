import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { PaddingTopContext } from '../../themes/contexts'
import { GlobalStyle } from './GlobalStyle'
import { theme } from '../../themes/theme'
import { StyledLayoutMain } from './Layout.styled'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from '../Container'
import { Chevrons } from '../Chevrons'

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <PaddingTopContext.Consumer>
          {({ removePaddingTop: removeMarginTop }) => (
            <StyledLayoutMain
              removeMarginTop={removeMarginTop}
            >
              <Chevrons />
              <Container>
                {children}
              </Container>
            </StyledLayoutMain>
          )}
        </PaddingTopContext.Consumer>
        { isFooterVisible &&
          <Footer />
        }
      </div>
    </ThemeProvider>
  )
}

export default Layout
