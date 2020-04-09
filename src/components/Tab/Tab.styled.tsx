import styled from 'styled-components'

import { ThemeType } from '../../themes/theme'

type IProps = {
  theme: ThemeType
}

export const Container = styled.ul`
  list-style: none;
  text-align: center;
`

export const TabItem = styled.li<IProps>`
  display: inline-block;
  padding: 8px 16px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.middle};
  margin-right: 8px;
  border-radius: 8px;

  &:last-child {
    margin-right: 0;
  }
`