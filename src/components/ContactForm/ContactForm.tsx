import React from 'react'

import {
  StyledContactForm,
  StyledContactFormInput,
  StyledContactFormTextArea
} from './ContactForm.styled'

const ContactForm = () => {
  return (
    <StyledContactForm 
      action='' 
      id='contactForm'
    >
      <StyledContactFormInput 
        type='text'
        name='name' 
        placeholder='Your Name'
      />
      <StyledContactFormInput 
        type='email'
        name='email'
        placeholder='Your Email'
      />
      <StyledContactFormTextArea 
        name='comment'
        form='contactForm'
        placeholder='Your Message'
      />
    </StyledContactForm>
  )
}

export default ContactForm