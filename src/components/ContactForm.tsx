import React from 'react'

import contactFormStyles from '../scss/components/ContactForm.module.scss'

const ContactForm = () => {
  return (
    <form 
      action="" 
      id="contactForm"
      className={contactFormStyles.contactFormWrapper}
    >
      <input 
        type="text" 
        name="name" 
        className={contactFormStyles.contactFormInput}
      />
      <input 
        type="email" 
        name="email" 
        className={contactFormStyles.contactFormInput}
      />
      <textarea 
        name="comment" 
        form="contactForm"
        className={contactFormStyles.contactFormInput}
      >
          Your message...
      </textarea>
    </form>
  )
}

export default ContactForm