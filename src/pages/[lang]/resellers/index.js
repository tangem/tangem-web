import Head from 'next/head'
import React from "react";
import i18next, {t} from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../../lib/lang';
import {main} from './resellers.module.scss'

import Resellers from "../../../components/Common/Pricing/resellers";

export const LangResellerPage = ({ language }) => {
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
			<main className={main}>
				<Resellers />
			</main>
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


export default LangResellerPage
