import React from 'react';
import type { NextPage } from 'next'
import ProductsPage from '../src/components/pages/products/ProductsPage';
import Head from 'next/head';
const Products: NextPage = () => {
  return (
    <main>
      <Head>
        <title>PHL | News</title>
        <meta name="description" content="Get in touch, we would love to hear from you."/>
      </Head>
      <ProductsPage/>
    </main>
  )
}

export default Products