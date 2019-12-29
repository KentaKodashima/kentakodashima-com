import React, { useState, ChangeEvent, FormEvent } from 'react'

import contactStyles from '../scss/pages/contact.module.scss'
import { ChevronsContext, PaddingTopContext } from '../themes/contexts'
import {
  Layout,
  PageTitle,
  ContactForm,
  SEO,
  VerticalScrollIndicator
} from '../components'

const ContactPage = () => {
  const [formValuesState, setFormValuesState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    setFormValuesState({ ...formValuesState, [e.target.name]: e.target.value })
  }

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try{
      const response = await fetch("/.netlify/functions/handleContactForm", {
        method: "POST",
        body: JSON.stringify(formValuesState),
      })

      if (!response.ok) {
        //not 200 response
        console.log(response, 'somthing went wrong')
        return
      }

      //all OK
      
    } catch(e){
      console.log(e, 'somthing went wrong')
      //error
    }
  }

  return (
    <PaddingTopContext.Provider value={{ removePaddingTop: false }}>
      <ChevronsContext.Provider 
        value={{ 
          leftLink: '/about', 
          rightLink: undefined,
          leftLinkText: 'About Me',
          rightLinkText: undefined
        }}
      >
        <Layout
          isFooterVisible={true}
        >
          <SEO title="Contact" />
          <div className={contactStyles.contactWrapper}>
            <PageTitle
              title='Contact'
            />
            <VerticalScrollIndicator />
            <ContactForm
              onChange={onChange}
              onFormSubmit={onFormSubmit}
            />
          </div>
        </Layout>
      </ChevronsContext.Provider>
    </PaddingTopContext.Provider>
  )
}

export default ContactPage