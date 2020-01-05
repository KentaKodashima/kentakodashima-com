import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import { ThemeType } from '../../themes/theme'

type StyledChevronProps = {
  theme: ThemeType
}

// export const StyledChevron = styled.div<StyledChevronProps>`
export const StyledChevron = styled(motion.div)`
  position: fixed;
  width: 1px;
  height: 1px;

  ${({ theme }: StyledChevronProps) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      display: none;
    }
  `}
`

export const StyledChevronLeftArrowBar = styled.span`
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 25%;
    transition: all 100ms ease;
    display: block;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }: StyledChevronProps) => theme.colors.accent};
    transform: rotate(-45deg);
    transform-origin: top left;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 25%;
    transition: all 100ms ease;
    display: block;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }: StyledChevronProps) => theme.colors.accent};
    transform: rotate(45deg);
    transform-origin: top left;
  }
`

export const StyledChevronRightArrowBar = styled.span`
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 25%;
    transition: all 100ms ease;
    display: block;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }: StyledChevronProps) => theme.colors.accent};
    transform: rotate(-45deg);
    transform-origin: top right;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 25%;
    transition: all 100ms ease;
    display: block;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }: StyledChevronProps) => theme.colors.accent};
    transform: rotate(45deg);
    transform-origin: top right;
  }
`

export const StyledChevronLeftText = styled.span`
  color: ${({ theme }: StyledChevronProps) => theme.colors.accent};
  text-decoration: none;
  font-size: ${({ theme }: StyledChevronProps) => theme.fontSize.regular};
  position: absolute;
  top: calc(50% - 0.5em);
  left: 25%;
  opacity: 0;
`

export const StyledChevronRightText = styled.span`
  color: ${({ theme }: StyledChevronProps) => theme.colors.accent};
  text-decoration: none;
  font-size: ${({ theme }: StyledChevronProps) => theme.fontSize.regular};
  position: absolute;
  top: calc(50% - 0.5em);
  right: 25%;
  opacity: 0;
`

export const StyledChevronLeftLink = styled(Link)`
  position: fixed;
  left: 0;
  width: 150px;
  top: 25%;
  height: 50%;

  &:hover {
    ${StyledChevronLeftText} {
      transform: translateX(100%);
      transition: all 0.1s ease-in;
      opacity: 1;
    }

    ${StyledChevronLeftArrowBar} {
      &:before {
        transform: rotate(-55deg);
      }
      &:after {
        transform: rotate(55deg);
      }
    }
  }
` 

export const StyledChevronRightLink = styled(Link)`
  position: fixed;
  right: 0;
  width: 150px;
  top: 25%;
  height: 50%;

  &:hover {
    ${StyledChevronRightText} {
      transform: translateX(-100%);
      transition: all 0.1s ease-in;
      opacity: 1;
    }

    ${StyledChevronRightArrowBar} {
      &:before {
        transform: rotate(-55deg);
      }
      &:after {
        transform: rotate(55deg);
      }
    }
  }
` 