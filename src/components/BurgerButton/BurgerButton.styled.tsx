import styled from 'styled-components'

type StyledBurgerProps = {
  open: boolean
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: block;
  height: 36px;
  border: none;
  background-color: transparent;

  span {
    position: relative;
    display: block;
    width: 52px;
    height: 2px;
    background-color: ${props => props.open ? 'transparent' : props.theme.colors.accent};

    &:before {
      content: '';
      position: absolute;
      transition: all 100ms ease;
      display: block;
      width: 52px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.accent};
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
      background-color: ${({ theme }) => theme.colors.accent};
      top: 15px;
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(11px, -11px)' : 'none'};
    }
  }
`