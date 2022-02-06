// import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Intro } from '../components/intro'
import { Features } from '../components/features'
import { Web3Compatible } from '../components/web3Compatible'
import { Banner } from '../components/banner'
import { Faq } from '../components/faq'
import { Community } from '../components/community'
import { Solutions } from '../components/solutions'

export default function Home({ }) {

  const router = useRouter()

  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     router.push('/#personal')
  //   }
  // }, [])
  
  return (
    <>
      <Head>
        <title>Tangem web</title>
      </Head>

      <Header />

      <main>
        <Intro />
        <Features />
        <Solutions />
        <Web3Compatible />
        <Banner />
        <Faq />
        <Community />
      </main>

      <Footer />
    </>
  )
}
