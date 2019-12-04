import styled from 'styled-components'

export const StyledSNSIcons = styled.ul`
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