import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import headerStyle from '../scss/components/Header.module.scss'
import Container from './Container'
import BurgerButton from '../components/BurgerButton/BurgerButton'

const HeaderContainer = styled(Container)`
  height: 100%;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className={headerStyle.headerBar}>
      <HeaderContainer>
        <div className={headerStyle.headerContentWrapper}>
          <div className={headerStyle.logoArea} >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
              >
                K
              </Link>
            </h1>
          </div>
          <BurgerButton 
            open={open}
            setOpen={setOpen}
          />
        </div>
      </HeaderContainer>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
