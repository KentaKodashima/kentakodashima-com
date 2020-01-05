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
  flex-wrap: wrap;
  margin-left: 0;
  margin-bottom: 40px;
`

export const StyledAppStoreLinkButton = styled.li<Props>`
  width: 180px;
  margin: 10px;
  box-sizing: border-box;
`

export const StyledGooglePlayLinkButton = styled.li<Props>`
  width: 232px;
  margin: 0;
`

export const StyledProjectLinkButton = styled.li<Props>`
  width: 180px;
  height: 60px;
  background-color: ${({ theme }: Props) => theme.colors.github};
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  box-sizing: border-box;

  >a {
    display: inline-block;
    height: 100%;
    line-height: 60px;
    font-size: ${({ theme }: Props) => theme.fontSize.body};
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
  margin-right: 8px;
`