import React from 'react'

import { ChevronsContext } from '../themes/themeContext'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <ChevronsContext.Provider value={{ leftLink: '/blog', rightLink: undefined }}>
      <Layout
        isFooterVisible={true}
      >
        <PageTitle
          title='Contact'
        />
        <ContactForm />
      </Layout>
    </ChevronsContext.Provider>
  )
}

export default ContactPage