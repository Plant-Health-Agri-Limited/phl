import React, { useEffect } from 'react'

// css links
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/styles.css'

// import type { AppProps } from 'next/app'

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import Head from "next/head";
import { useRouter } from 'next/router'

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


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
