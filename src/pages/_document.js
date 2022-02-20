import { Html, Head, Main, NextScript, } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          id="openShopofiCheckout"
          onLoad={() => {
            window.open = function (open) {
              return function (url, name, features) {
                if (url.indexOf("myshopify") < 0) {
                return open.call(window, url, name, features);
              };
              window.location.href = url;
                return null;
              };
            }(window.open);
          }}
        />
      </body>
    </Html>
  )
}
