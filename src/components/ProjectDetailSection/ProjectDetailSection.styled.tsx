import styled, { css } from 'styled-components'
import { ThemeType } from '../../themes/theme'

type StyledProjectDetailSectionProps = {
  theme: ThemeType
}

export const StyledProjectDetailSection = styled.div<StyledProjectDetailSectionProps>`
  margin-bottom: 50px;
  
  >h3 {
    font-family: ${({ theme }) => theme.fontFamily.bold};
    font-size: ${({ theme }) => theme.fontSize.sectionTitle};

    ${({ theme }) => css`
      @media screen and (max-width: ${theme.breakPoint.mobilePortraitMax}) {
        font-size: ${({ theme }) => theme.fontSize.mobile.sectionTitle};
      }
    `}
  }

  >p {
    font-size: ${({ theme }) => theme.fontSize.regular};
    color: ${({ theme }) => theme.colors.middle};
  }

  >ul {
    >li {
      font-size: ${({ theme }) => theme.fontSize.regular};
      color: ${({ theme }) => theme.colors.middle};
    }
  }
`