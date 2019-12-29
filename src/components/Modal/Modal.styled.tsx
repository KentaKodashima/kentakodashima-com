import styled from 'styled-components'

import { ThemeType } from '../../themes/theme'

type StyledModalProps = {
  theme: ThemeType
  show?: boolean
}

export const StyledModalWrapper = styled.div<StyledModalProps>`
  display: ${({ show }: StyledModalProps) => show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`

export const StyledModalDialogWrapper = styled.div<StyledModalProps>`
  display: block;
  width: 33%;
  padding: 20px;
  background-color: ${({ theme }: StyledModalProps) => theme.colors.base};
  text-align: center;
  border-radius: 5px;
`

export const StyledModalDialogTitle = styled.div<StyledModalProps>`
  font-family: ${({ theme }: StyledModalProps) => theme.fontFamily.bold};
  font-size: ${({ theme }: StyledModalProps) => theme.fontSize.body};
  margin-bottom: 8px;
`

export const StyledModalDialogMessage = styled.div<StyledModalProps>`
  font-size: ${({ theme }: StyledModalProps) => theme.fontSize.body};
  margin-bottom: 16px;
`

export const StyledModalDialogButton = styled.button<StyledModalProps>`
  display: block;
  background-color: ${({ theme }: StyledModalProps) => theme.colors.accent};
  font-size: ${({ theme }: StyledModalProps) => theme.fontSize.body};
  color: ${({ theme }: StyledModalProps) => theme.colors.base};
  padding: 8px 16px;
  margin: 0 auto;
  border: none;
`