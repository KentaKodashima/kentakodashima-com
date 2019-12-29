import React, { FunctionComponent } from 'react'

import {
  StyledModalWrapper,
  StyledModalDialogWrapper,
  StyledModalDialogTitle,
  StyledModalDialogMessage,
  StyledModalDialogButton
} from './Modal.styled'

type ModalProps = {
  show: boolean
  title: string
  message: string
  onButtonClick: () => void
}

const Modal: FunctionComponent<ModalProps> = ({ show, title, message, onButtonClick }) => {
  return (
    <StyledModalWrapper
      show={show}
    >
      <StyledModalDialogWrapper>
        <StyledModalDialogTitle>{title}</StyledModalDialogTitle>
        <StyledModalDialogMessage>{message}</StyledModalDialogMessage>
        <StyledModalDialogButton
          onClick={onButtonClick}
        >
          OK
        </StyledModalDialogButton>
      </StyledModalDialogWrapper>
    </StyledModalWrapper>
  )
}

export default Modal