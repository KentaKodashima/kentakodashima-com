import styled, { keyframes, css } from 'styled-components'

import { ThemeType } from '../../themes/theme'

type StyledVeticalScrollIndicatorProps = {
  theme: ThemeType
}

const animation = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
`

export const StyledVeticalScrollIndicator = styled.div<StyledVeticalScrollIndicatorProps>`
  /* position: relative; */
  /* content: "" */
  position: relative;

  ${({ theme }: StyledVeticalScrollIndicatorProps) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      display: none;
    }
  `}

  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-left: -25px;
    border-left: ${({ theme }: StyledVeticalScrollIndicatorProps) => theme.colors.middle} 2px solid;
    border-bottom: ${({ theme }: StyledVeticalScrollIndicatorProps) => theme.colors.middle} 2px solid;
    transform: rotate(-45deg);
    animation: ${animation} 2s infinite;
    box-sizing: border-box;
  }

  div {
    padding-top: 100px;
    margin-bottom: 4.8rem;
    text-align: center;
    color: ${({ theme }: StyledVeticalScrollIndicatorProps) => theme.colors.middle};
    font-size: ${({ theme }: StyledVeticalScrollIndicatorProps) => theme.fontSize.body};
    font-family: ${({ theme }: StyledVeticalScrollIndicatorProps) => theme.fontFamily.bold};
  }
`