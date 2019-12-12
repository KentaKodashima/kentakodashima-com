import styled from 'styled-components'
import { ThemeType } from '../../themes/Theme'

type StyledProjectDetailSectionProps = {
  theme: ThemeType
}

export const StyledProjectDetailSection = styled.div<StyledProjectDetailSectionProps>`
  >h3 {
    font-family: ${({ theme }) => theme.fontFamily.bold};
    font-size: ${({ theme }) => theme.fontSize.sectionTitle};
  }

  >p {
    font-size: ${({ theme }) => theme.fontSize.body};
    color: ${({ theme }) => theme.colors.middle};
    margin-bottom: 50px;
  }

  >ul {
    >li {
      font-size: ${({ theme }) => theme.fontSize.body};
      color: ${({ theme }) => theme.colors.middle};
    }
  }
`