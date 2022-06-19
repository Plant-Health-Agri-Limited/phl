import React from 'react';
import type { NextPage } from 'next'
import HomePage from '../src/components/pages/Home/HomePage'
import Head from 'next/head';

const Home: NextPage = () => {
  return (
      <main>
        <Head>
          <title>PHL | Home</title>
        </Head>
        <HomePage/>
      </main>
  )
}

export default Home
