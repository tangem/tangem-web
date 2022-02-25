import { Html, Head, Main, NextScript } from 'next/document'
import { GOOGLE_ANALYTICS_CODE } from '../config/index'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-115763532-5'
        />
       <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-115763532-5', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
