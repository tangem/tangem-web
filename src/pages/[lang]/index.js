import Head from 'next/head'
import Header from '../../components/Common/Header'
import SectionHero from '../../components/Home/SectionHero'
import SectionFeature from '../../components/Home/SectionFeature'
import SectionWebCompatible from '../../components/Home/SectionCompatible'
import SectionSecure from '../../components/Home/SectionSecure'
import SectionFaq from '../../components/Home/SectionFaq'
import SectionCommunity from '../../components/Home/SectionCommunity'
import React from "react";
import Modal from "../../components/Home/Modal";
import ModalNew from "../../components/Common/Modal";
import Search from "../../components/Home/Search";
import useModal from "../../hooks/useModal";
import Pricing from "../../components/Common/Pricing";
import i18next, {t} from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import Footer from "../../components/Common/Footer";

export const LangHome = ({ language }) => {
	const { isShowing: isSearchShowing, toggle: toggleSearch } = useModal('search')
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
				<meta property="og:image" content="https://tangem.com/img/hero/phone@1x.png" />
				<meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
				<meta property="og:locale" content="en_US" />
				<title>{ t('title')}</title>
				<link rel='shortcut icon' href='/img/favicon/favicon.png' />
				<link rel='apple-touch-icon' href='/img/favicon/favicon-180.png' />
			</Head>
			<Header isDark={false} toggleBuy={toggleBuy}/>
			<main>
				<SectionHero
					toggleBuy={toggleBuy}
				/>
				<SectionFeature
					toggleBuy={toggleBuy}
					toggleSearch={toggleSearch}
				/>
				<SectionWebCompatible />
				<SectionSecure />
				<SectionFaq />
				<SectionCommunity />
				<Modal
					isShowing={isSearchShowing}
					hide={toggleSearch}
				>
					<Search hide={toggleSearch} />
				</Modal>
				<ModalNew
					isShowing={isBuyShowing}
					hide={toggleBuy}
					title={t('pricing.title')}
				>
					<Pricing />
				</ModalNew>
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


export default LangHome
