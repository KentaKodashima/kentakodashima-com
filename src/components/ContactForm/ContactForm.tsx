import React, { FunctionComponent, ChangeEvent, FormEvent } from 'react'

import {
  StyledContactForm,
  StyledContactFormInput,
  StyledContactFormTextArea,
  StyledSubmitButton
} from './ContactForm.styled'

type ContactFormProps = {
  onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

const ContactForm: FunctionComponent<ContactFormProps> = ({ onChange, onFormSubmit }) => {
  return (
    <StyledContactForm
      name='contactForm'
      method='POST'
      onSubmit={onFormSubmit}
    >
      <input type='hidden' name='bot-field' />
      <input type='hidden' name='form-name' value='contactForm' />
      <StyledContactFormInput 
        type='text'
        name='name' 
        placeholder='Your Name'
        onChange={onChange}
      />
      <StyledContactFormInput 
        type='email'
        name='email'
        placeholder='Your Email'
        onChange={onChange}
      />
      <StyledContactFormTextArea 
        name='comment'
        form='contactForm'
        placeholder='Your Message'
        onChange={onChange}
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