import styled, { css } from 'styled-components'

import { ThemeType } from '../../themes/theme'

type Props = {
  theme: ThemeType
}

export const StyledSkillsSectionWrapper = styled.section<Props>`
  h3 {
    color: ${({ theme }: Props) => theme.colors.accent};
    font-size: ${({ theme }: Props) => theme.fontSize.sectionTitle};
    margin-bottom: 30px;

  ${({ theme }: Props) => css`
    @media screen and (max-width: ${theme.breakPoint.tabletMax}) {
      font-size: ${({ theme }: Props) => theme.fontSize.mobile.sectionTitle};
    }
  `}
  }
`

export const StyledSkillsSectionContentWrapper = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
`

export const StyledSkillsSectionContextBox = styled.div<Props>`
  flex: 0 1 48%;
  margin: 0 4px 24px;

  h4 {
    color: ${({ theme }: Props) => theme.colors.middle};
    font-size: ${({ theme }: Props) => theme.fontSize.thumbnailTitle};
    margin-bottom: 30px;
  }

  ${({ theme }: Props) => css`
    @media screen and (max-width: ${theme.breakPoint.tabletMax}) {
      flex: 0 1 100%;
    }
  `}
`

export const StyledSkillsSectionIconsWrapper = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`