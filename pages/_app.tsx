import React from 'react'

// css links
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/styles.css'

import type { AppProps } from 'next/app'

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import Head from "next/head";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins Regular","Helvetica", "Arial", "sans-serif"].join(","),
  },
  components:{
    MuiTableRow:{
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // backgroundColor:'red'
          '&.MuiTableRow-hover:hover': {
            cursor:'pointer',
            // backgroundColor: '#ffdbbd',
            // backgroundColor: '#ffa74a',
            backgroundColor: '#ffbc75'
          },
        },
      },
    }
  }
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
