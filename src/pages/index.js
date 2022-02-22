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
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta name="description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tangem.com" />
        <meta property="og:title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
        <title>Tangem Wallet — hardware wallet for your crypto</title>
        <link rel='shortcut icon' href='/img/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
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
