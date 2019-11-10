import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { StyledBurger } from './BurgerButton.styled';

type BurgerProps = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Burger: FunctionComponent<BurgerProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <span></span>
    </StyledBurger>
  )
}

export default Burger;