import Head from 'next/head'
import Header from '../components/Landing/Header'
import SectionHero from '../components/Landing/SectionHero'
import SectionFeature from '../components/Landing/SectionFeature'
import SectionWebCompatible from '../components/Landing/SectionCompatible'
import SectionWallet from '../components/Landing/SectionWallet'
import SectionFaq from '../components/Landing/SectionFaq'
import SectionCommunity from '../components/Landing/SectionCommunity'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Tangem web</title>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/img/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
        <meta
          name='description'
          content='Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card.'
        />
        <meta
          property='og:title'
          content='Tangem Wallet - ultra secure hardware wallet for crypto currencies'
        />
        <meta
          property='og:description'
          content='Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card.'
        />
        <meta property='og:url' content='https://tangem.com/' />
        <meta property='og:type' content='website' />
      </Head>
      <Header />
      <main>
        <SectionHero />
        <SectionFeature />
        <SectionWebCompatible />
        <SectionWallet />
        <SectionFaq />
        <SectionCommunity />
      </main>
    </>
  )
}

export default Home
