import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { ThemeType } from '../../themes/theme'

type Props = {
  theme: ThemeType
}

export const StyledThumbnailWrapper = styled.div`
  flex: 0 1 32%;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0 4px 24px;

  &:hover {
    transform: translateY(-10px);
    transition: all 0.2s ease-in;
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.3);
  }

  ${({ theme }: Props) => css`
    @media screen and (max-width: ${theme.breakPoint.tabletMax}) {
      flex: 0 1 48%;
    }
  `}
`
export const StyledThumbnailAnchor = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
`

export const StyledGatsbyImage = styled(Img)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.middle};
`

export const StyledTextWrapper = styled.div`
  padding: 16px;
`

export const StyledThumbnailTitle = styled.h4<Props>`
  font-size: ${({ theme }) => theme.fontSize.thumbnailTitle};
  margin-bottom: 8px;

  ${({ theme }: Props) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      font-size: ${({ theme }) => theme.fontSize.mobile.thumbnailTitle};
    }
  `}
`

export const StyledDescription = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSize.thumbnailSubtitle};
  margin: 0;

  ${({ theme }: Props) => css`
    @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
      font-size: ${({ theme }) => theme.fontSize.mobile.thumbnailSubtitle};
    }
  `}
`