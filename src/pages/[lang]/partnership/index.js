import Head from "next/head";
import i18next from "i18next";
import Header from "../../../components/Common/Header";
import React from "react";
import SectionHero from "../../../components/Partnership/SectionHero";
import {getAllLanguageSlugs, getLanguage} from "../../../lib/lang";
import SectionReseller from "../../../components/Partnership/SectionReseller";
import SectionAffiliate from "../../../components/Partnership/SectionAffiliate";
import SectionWorld from "../../../components/Partnership/SectionWorld";
import Footer from "../../../components/Common/Footer";
import Modal from "../../../components/Landing/Modal";
import Pricing from "../../../components/Landing/Pricing";
import useModal from "../../../hooks/useModal";

const LangPartnership = () => {
	const { isShowing: isBuyShowing, toggle: toggleBuy } = useModal('pricing')

	return (
		<>
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name="title" content={ i18next.t('title') } />
				<meta name="description" content={ i18next.t('description') } />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://tangem.com" />
				<meta property="og:site_name" content={ i18next.t('title') } />
				<meta property="og:title" content={ i18next.t('title') } />
				<meta property="og:description" content={ i18next.t('description') } />
				<meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
				<meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
				<meta property="og:locale" content="en_US" />
				<title>Tangem Wallet — Hardware Wallet For Your Crypto</title>
				<link rel='shortcut icon' href='/img/favicon/favicon.png' />
				<link rel='apple-touch-icon' href='/img/favicon/favicon-180.png' />
			</Head>
			<Header isDark={true} toggleBuy={toggleBuy} />
			<main>
				<SectionHero />
				<SectionReseller />
				<SectionAffiliate />
				<SectionWorld />
				<Modal
					isShowing={isBuyShowing}
					hide={toggleBuy}
				>
					<Pricing hide={toggleBuy} />
				</Modal>
			</main>
			<Footer />
		</>
	)
}

export async function getStaticPaths() {
	const paths = getAllLanguageSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const language = getLanguage(params.lang);
	return {
		props: {
			language,
		},
	};
}

export default LangPartnership;
