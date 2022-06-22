import useModal from "../../../hooks/useModal";
import Head from "next/head";
import i18next, {t} from "i18next";
import Header from "../../../components/Common/Header";
import SectionHero from "../../../components/Company/SectionHero";
import Modal from "../../../components/Home/Modal";
import Pricing from "../../../components/Home/Pricing";
import Footer from "../../../components/Common/Footer";
import {getAllLanguageSlugs, getLanguage} from "../../../lib/lang";
import React from "react";
import SectionTeam from "../../../components/Company/SectionTeam";
import SectionPartners from "../../../components/Company/SectionPartners";
import SectionHiring from "../../../components/Company/SectionHiring";
import * as styles from "./company.module.scss";

const LangCompany = () => {
	const { language } = i18next;
	const { isShowing: isBuyShowing, toggle: toggleBuy } = useModal('pricing')

	return (
		<>
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name="title" content={ t('pages.partnership.title') } />
				<meta name="description" content={ t('description') } />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://tangem.com" />
				<meta property="og:site_name" content={ t('title') } />
				<meta property="og:title" content={ t('title') } />
				<meta property="og:description" content={ t('description') } />
				<meta property="og:image" content="https://tangem.com/img/hero/phone@1x.png" />
				<meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
				<meta property="og:locale" content="en_US" />
				<title>{t('pages.company.title')}</title>
				<link rel='shortcut icon' href='/img/favicon/favicon.png' />
				<link rel='apple-touch-icon' href='/img/favicon/favicon-180.png' />
			</Head>
			<Header isDark={false} toggleBuy={toggleBuy} className={styles.header} />
			<main>
				<SectionHero />
				<SectionTeam />
				<SectionPartners />
				{ language === 'ru' && <SectionHiring /> }
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

export default LangCompany;
