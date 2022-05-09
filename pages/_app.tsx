import React from 'react'

// css links
import 'bulma/css/bulma.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/styles.css'

import type { AppProps } from 'next/app'

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import Head from "next/head";

const theme = createTheme({
  typography: {
    fontFamily: ["Helvetica", "Arial", "sans-serif"].join(","),
  },
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
