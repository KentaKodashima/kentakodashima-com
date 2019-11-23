import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledChevron = styled.div`
  position: fixed;
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
    background-color: ${({ theme }) => theme.accent};
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
    background-color: ${({ theme }) => theme.accent};
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
    background-color: ${({ theme }) => theme.accent};
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
    background-color: ${({ theme }) => theme.accent};
    transform: rotate(45deg);
    transform-origin: top right;
  }
`

export const StyledChevronLeftLink = styled(Link)`
  position: fixed;
  left: 0;
  width: 150px;
  top: 25%;
  height: 50%;

  &:hover {
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

// ${StyledChevronRightLink}:hover {
//   &:before {
//     transform: rotate(-35deg);
//   }
//   &:after {
//     transform: rotate(35deg);
//   }
// }

// ${StyledChevronLeftLink}:hover {
//   &:before {
//     transform: rotate(-35deg);
//   }
//   &:after {
//     transform: rotate(35deg);
//   }
// }