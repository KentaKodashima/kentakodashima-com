import React from 'react'

import contactStyles from '../scss/pages/contact.module.scss'
import { ChevronsContext, PaddingTopContext } from '../themes/contexts'
import {
  Layout,
  PageTitle,
  ContactForm,
  SEO
} from '../components'

const ContactPage = () => {
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
            <ContactForm />
          </div>
        </Layout>
      </ChevronsContext.Provider>
    </PaddingTopContext.Provider>
  )
}

export default ContactPage