import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ThemeType } from '../../themes/theme'

type Props = {
  theme: ThemeType
}

export const StyledProjectLinksButtonWrapper = styled.ul<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledAppStoreLinkButton = styled.li<Props>`
  width: 180px;
`

export const StyledGooglePlayLinkButton = styled.li<Props>`
  width: 228px;
`

export const StyledProjectLinkButton = styled.li<Props>`
  width: 180px;
  background-color: ${({ theme }: Props) => theme.colors.github};
  border-radius: 10px;
  padding: 15px 12px;
  text-align: center;

  >a {
    font-size: ${({ theme }: Props) => theme.fontSize.thumbnailTitle};
    font-family: ${({ theme }: Props) => theme.fontFamily.bold};
    color: ${({ theme }: Props) => theme.colors.base};
    text-decoration: none;
  }

  >a:visited {
    color: ${({ theme }: Props) => theme.colors.base};
  }
`

export const StyledGithubIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.base};
`