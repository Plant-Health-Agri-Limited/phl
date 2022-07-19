import { Html, Head, Main, NextScript } from 'next/document'

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src={gtag} />
          <script 
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        <meta charSet="UTF-8"/>
        <meta name="description" content="Plant Health Agri Limited is a wholly owned Zambian company focusing on agriculture. PHAL services both the small holder and commercial farmers."/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}