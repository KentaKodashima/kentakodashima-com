import React from 'react'

import {
  StyledContactForm,
  StyledContactFormInput,
  StyledContactFormTextArea,
  StyledSubmitButton
} from './ContactForm.styled'

const ContactForm = () => {
  return (
    <StyledContactForm
      name='contactForm'
      method='POST'
      netlify-honeypot='bot-field'
      data-netlify='true'
    >
      <input type='hidden' name='bot-field' />
      <input type='hidden' name='form-name' value='contactForm' />
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
      <StyledSubmitButton
        type='submit'
      >
        Send
      </StyledSubmitButton>
    </StyledContactForm>
  )
}

export default ContactForm