import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import headerStyle from "../scss/components/Header.module.scss"
import Container from "./Container"
import BurgerButton from '../components/BurgerButton/BurgerButton'

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className={headerStyle.headerBar}>
      <Container>
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
          {/* <button className={headerStyle.menuBtn}>
            <span className={headerStyle.menuBar}></span>
          </button> */}
        </div>
      </Container>
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
