import Head from 'next/head'
import Header from '../components/Landing/Header'
import SectionHero from '../components/Landing/SectionHero'
import SectionFeature from '../components/Landing/SectionFeature'
import SectionWebCompatible from '../components/Landing/SectionCompatible'
import SectionWallet from '../components/Landing/SectionWallet'
import SectionFaq from '../components/Landing/SectionFaq'
import SectionCommunity from '../components/Landing/SectionCommunity'
import React from "react";
import Modal from "../components/Landing/Modal";
import Search from "../components/Landing/Search";
import useModal from "../hooks/useModal";
import Pricing from "../components/Landing/Pricing";
import Video from "../components/Landing/Video";

export const Home = () => {
	const {isShowing: isSearchShowing, toggle: toggleSearch} = useModal()
	const {isShowing: isBuyShowing, toggle: toggleBuy} = useModal()
	const {isShowing: isVideoShowing, toggle: toggleVideo} = useModal()

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta name="description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tangem.com" />
        <meta property="og:site_name" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
        <meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
        <meta property="og:locale" content="en_US" />
        <title>Tangem Wallet — hardware wallet for your crypto</title>
        <link rel='shortcut icon' href='/img/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
      </Head>
      <Header toggleBuy={toggleBuy} />
      <main>
        <SectionHero
	        toggleBuy={toggleBuy}
	        toggleVideo={toggleVideo}
        />
        <SectionFeature
	        toggleBuy={toggleBuy}
	        toggleSearch={toggleSearch}
        />
        <SectionWebCompatible />
        <SectionWallet />
        <SectionFaq />
        <SectionCommunity />
	      <Modal
		      isShowing={isSearchShowing}
		      hide={toggleSearch}
	      >
		      <Search hide={toggleSearch} />
	      </Modal>
	      <Modal
		      isShowing={isBuyShowing}
		      hide={toggleBuy}
	      >
		      <Pricing hide={toggleBuy} />
				</Modal>
	      <Modal isShowing={isVideoShowing}>
		      <Video hide={toggleVideo} />
				</Modal>
      </main>
    </>
  )
}

export default Home
