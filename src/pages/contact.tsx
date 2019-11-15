import React from 'react'

import contactStyles from '../scss/pages/contact.module.scss'
import { ChevronsContext, MarginTopContext } from '../themes/themeContext'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <MarginTopContext.Provider value={{ removeMarginTop: false }}>
      <ChevronsContext.Provider value={{ leftLink: '/blog', rightLink: undefined }}>
        <Layout
          isFooterVisible={true}
        >
          <div className={contactStyles.contactWrapper}>
            <PageTitle
              title='Contact'
            />
            <ContactForm />
          </div>
        </Layout>
      </ChevronsContext.Provider>
    </MarginTopContext.Provider>
  )
}

export default ContactPage