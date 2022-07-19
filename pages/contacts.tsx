import React from 'react';
import type { NextPage } from 'next'
import ContactPage from '../src/components/pages/contacts/ContactPage';
import Head from 'next/head';
const Contacts: NextPage = () => {
  return (
    <main>
    <Head>
      <title>PHL | Contacts</title>
      <meta name="description" content="Get in touch, we would love to hear from you."/>
    </Head>
    <ContactPage/>
  </main>
  )
}

export default Contacts