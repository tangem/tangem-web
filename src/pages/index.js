import Head from 'next/head'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Intro } from '../components/intro'
import { Features } from '../components/features'
import { Web3Compatible } from '../components/web3Compatible'
import { MobileBanner } from '../components/mobileBanner'
import { Faq } from '../components/faq'
import { Community } from '../components/community'
import { Solutions } from '../components/solutions'

export default function Home({ }) {
  
  return (
    <>
      <Head>
        <title>Tangem web</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/img/favicon/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon/favicon_180.png" />
        <meta name="description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:title" content="Tangem Wallet - ultra secure hardware wallet for crypto currencies" />
        <meta property="og:description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:url" content="https://tangem.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main>
        <Intro />
        <Features />
        <Web3Compatible />
        <MobileBanner />
        <Faq />
        <Community />
      </main>
    </>
  )
}
