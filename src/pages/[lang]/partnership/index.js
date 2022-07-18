import {t} from 'i18next';
import Header from "../../../components/Common/Header";
import React from "react";
import SectionHero from "../../../components/Partnership/SectionHero";
import {getAllLanguageSlugs, getLanguage} from "../../../lib/lang";
import SectionReseller from "../../../components/Partnership/SectionReseller";
import SectionAffiliate from "../../../components/Partnership/SectionAffiliate";
import SectionWorld from "../../../components/Partnership/SectionWorld";
import Footer from "../../../components/Common/Footer";
import Modal from "../../../components/Common/Modal";
import Pricing from "../../../components/Common/Pricing";
import useModal from "../../../hooks/useModal";
import Layout from "../../../components/Common/Layout";

const LangPartnership = () => {
	const { isShowing: isBuyShowing, toggle: toggleBuy } = useModal('pricing')

	return (
		<Layout title={t('pages.partnership.title')} description={t('description') }>
			<Header isDark={true} toggleBuy={toggleBuy} />
			<main>
				<SectionHero />
				<SectionReseller />
				<SectionAffiliate />
				<SectionWorld />
				<Modal
					isShowing={isBuyShowing}
					hide={toggleBuy}
					title={t('pricing.title')}
					anchor="pricing"
				>
					<Pricing />
				</Modal>
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

export default LangPartnership;
