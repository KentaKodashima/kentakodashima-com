import styled from 'styled-components'
import Colors from '../../themes/Colors'

export const StyledBurger = styled.button`
  position: relative;
  height: 30px;
  padding: 25px 15px;
  border: none;
  background-color: transparent;

  span {
    position: absolute;
    width: 50px;
    height: 2px;
    background-color: ${({ open }) => open ? 'transparent' : Colors.accent};
    top: 50%;

    &:before {
      content: '';
      position: absolute;
      transition: all 100ms ease;
      display: block;
      width: 50px;
      height: 2px;
      background-color: ${Colors.accent};
      top: -15px;
      transform: ${({ open }) => open ? 'rotate(45deg) translate(11px, 11px)' : 'none'};
    }

    &:after {
      content: '';
      position: absolute;
      transition: all 100ms ease;
      display: block;
      width: 50px;
      height: 2px;
      background-color: ${Colors.accent};
      top: 15px;
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(11px, -11px)' : 'none'};
    }
  }
`