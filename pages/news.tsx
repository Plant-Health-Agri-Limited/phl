import React from 'react';
import type { NextPage } from 'next'
import NewsPage from '../src/components/pages/NewsPage';
import Head from 'next/head';
const News: NextPage = () => {
  return (
    <main>
      <Head>
        <title>PHL | News</title>
        <meta name="description" content="Get in touch, we would love to hear from you."/>
      </Head>
      <NewsPage/>
    </main>
  )
}

export default News