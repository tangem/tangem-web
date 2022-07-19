import React from "react";
import {t} from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../../lib/lang';
import {main} from './resellers.module.scss'

import Resellers from "../../../components/Common/Pricing/resellers";
import Layout from "../../../components/Common/Layout";

export const LangResellerPage = () => {
	return (
		<Layout title={t('title')} description={t('description')}>
			<main className={main}>
				<Resellers />
			</main>
		</Layout>
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
