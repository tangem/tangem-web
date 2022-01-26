import { appWithTranslation } from 'next-i18next'
import '../styles/normalize.css'
import '../styles/custom.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
