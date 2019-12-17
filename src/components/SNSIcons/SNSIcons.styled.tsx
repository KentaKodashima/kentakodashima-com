import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.base};
  font-size: 6rem;
  padding: 8px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      font-size: 3.8rem;
    }
  `}
`

export const StyledSNSIcons = styled.ul`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      margin: 0 auto;
    }
  `}

  >li {
    display: inline-block;
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.accent};
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }

    >a {
      width: 100%;
      height: 100%;
    }
  }
`