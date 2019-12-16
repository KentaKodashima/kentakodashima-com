import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import BurgerButton from '../BurgerButton'
import NavMenu from '../NavMenu'
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderContentWrapper,
  StyledHeaderLogo
} from './Header.styled'


const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <StyledHeader>
      <NavMenu 
        open={open}
      />
      <StyledHeaderContainer>
        <StyledHeaderContentWrapper>
          <div>
            <StyledHeaderLogo>
              <Link
                to="/"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                  fontSize: '50px'
                }}
              >
                K
              </Link>
            </StyledHeaderLogo>
          </div>
          <BurgerButton 
            open={open}
            setOpen={setOpen}
          />
        </StyledHeaderContentWrapper>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header
