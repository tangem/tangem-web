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
import {t} from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import Footer from "../../components/Common/Footer";
import Layout from "../../components/Common/Layout";

export const LangHome = ({ language }) => {
	const { isShowing: isSearchShowing, toggle: toggleSearch } = useModal('search')
	const { isShowing: isBuyShowing, toggle: toggleBuy } = useModal('pricing')

	return (
		<Layout title={t('title')} description={t('description') }>
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
					<Search hide={toggleSearch}	anchor="search" />
				</Modal>
				<ModalNew
					isShowing={isBuyShowing}
					hide={toggleBuy}
					title={t('pricing.title')}
					anchor="pricing"
				>
					<Pricing />
				</ModalNew>
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
