import Header from '../../components/Common/Header'
import SectionHero from '../../components/Home/SectionHero'
import SectionFeature from '../../components/Home/SectionFeature'
import SectionWebCompatible from '../../components/Home/SectionCompatible'
import SectionSecure from '../../components/Home/SectionSecure'
import SectionFaq from '../../components/Home/SectionFaq'
import SectionCommunity from '../../components/Home/SectionCommunity'
import React from "react";
import {t} from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import Footer from "../../components/Common/Footer";
import Layout from "../../components/Common/Layout";

export const LangHome = () => {
	return (
		<Layout title={t('title')} description={t('description') }>
			<Header isDark={false} />
			<main>
				<SectionHero/>
				<SectionFeature/>
				<SectionWebCompatible />
				<SectionSecure />
				<SectionFaq />
				<SectionCommunity />
			</main>
			<Footer />
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


export default LangHome
