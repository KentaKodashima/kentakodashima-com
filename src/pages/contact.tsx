import React, { useState, ChangeEvent, FormEvent } from 'react'

import contactStyles from '../scss/pages/contact.module.scss'
import { ChevronsContext, PaddingTopContext } from '../themes/contexts'
import {
  Layout,
  PageTitle,
  ContactForm,
  SEO,
  VerticalScrollIndicator,
  Modal
} from '../components'

const formValuesInitialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const modalValuesInitialState = {
  show: false,
  title: '',
  message: ''
}

const ContactPage = () => {
  const [formValuesState, setFormValuesState] = useState(formValuesInitialState)
  const [modalValues, setModalValuesState] = useState(modalValuesInitialState)

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

      // if not 200
      if (!response.ok) {
        setModalValuesState({
          show: true,
          title: 'Something went wrong.',
          message: 'Failed to send your message.'
        })
        return
      }

      setFormValuesState({ ...formValuesInitialState })
      setModalValuesState({
        show: true,
        title: 'Your message has been sent successfully!',
        message: 'Thank you for reaching out to me.'
      })
    } catch(e){
      console.log(e, 'somthing went wrong')
      setModalValuesState({
        show: true,
        title: 'Something went wrong.',
        message: 'Failed to send your message.'
      })
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
          <Modal
            show={modalValues.show}
            title={modalValues.title}
            message={modalValues.message}
            onButtonClick={() => {
              setModalValuesState({ ...modalValuesInitialState })
              setFormValuesState({ ...formValuesInitialState })
            }}
          />
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