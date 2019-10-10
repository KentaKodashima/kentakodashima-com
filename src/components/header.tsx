import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyle from "../scss/components/Header.module.scss"
import Container from "./Container"

const Header = ({ siteTitle }) => (
  <header className={headerStyle.headerBar}>
    <Container>
      <div className={headerStyle.logoArea} >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <button className={headerStyle.menuBtn}>
        <span className={headerStyle.menuBar}></span>
      </button>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
