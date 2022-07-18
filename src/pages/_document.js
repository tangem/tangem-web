import { Html, Head, Main, NextScript } from 'next/document'
import i18next from "i18next";

export default function Document() {
	const { language } = i18next;

  return (
    <Html lang={language}>
      <Head>
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  )
}
