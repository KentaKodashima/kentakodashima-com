import React from 'react'

import {
  StyledContactForm,
  StyledContactFormInput,
  StyledContactFormTextArea
} from './ContactForm.styled'

const ContactForm = () => {
  return (
    <StyledContactForm 
      action="" 
      id="contactForm"
    >
      <StyledContactFormInput 
        type="text" 
        name="name" 
      />
      <StyledContactFormInput 
        type="email" 
        name="email"
      />
      <StyledContactFormTextArea 
        name="comment" 
        form="contactForm"
      >
          Your message...
      </StyledContactFormTextArea>
    </StyledContactForm>
  )
}

export default ContactForm