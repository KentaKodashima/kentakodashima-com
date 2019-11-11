import styled from 'styled-components'
import Colors from '../../themes/Colors'

type StyledBurgerProps = {
  open: boolean
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: block;
  padding: 25px 15px;
  border: none;
  background-color: transparent;

  span {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 2px;
    background-color: ${({ open }) => open ? 'transparent' : Colors.accent};
    top: 0;

    &:before {
      content: '';
      position: absolute;
      transition: all 100ms ease;
      display: block;
      width: 52px;
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
      width: 52px;
      height: 2px;
      background-color: ${Colors.accent};
      top: 15px;
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(11px, -11px)' : 'none'};
    }
  }
`