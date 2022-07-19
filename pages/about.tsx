import React from 'react';
import type { NextPage } from 'next'
import AboutPage from '../src/components/pages/About/AboutPage'
import Head from 'next/head';
const About: NextPage = () => {
  return (
    <main>
      <Head>
        <title>PHL | About us</title>
      </Head>
      <AboutPage/>
    </main>
      
  )
}

export default About