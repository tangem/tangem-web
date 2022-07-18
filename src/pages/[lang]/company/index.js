import useModal from "../../../hooks/useModal";
import i18next, {t} from "i18next";
import Header from "../../../components/Common/Header";
import SectionHero from "../../../components/Company/SectionHero";
import Modal from "../../../components/Common/Modal";
import Pricing from "../../../components/Common/Pricing";
import Footer from "../../../components/Common/Footer";
import {getAllLanguageSlugs, getLanguage} from "../../../lib/lang";
import React from "react";
import SectionTeam from "../../../components/Company/SectionTeam";
import SectionPartners from "../../../components/Company/SectionPartners";
import SectionHiring from "../../../components/Company/SectionHiring";
import * as styles from "./company.module.scss";
import Layout from "../../../components/Common/Layout";

const LangCompany = () => {
	const { language } = i18next;
	const { isShowing: isBuyShowing, toggle: toggleBuy } = useModal('pricing')

	return (
		<Layout title={t('pages.company.title')} description={t('description')} >
			<Header isDark={false} toggleBuy={toggleBuy} className={styles.header} />
			<main>
				<SectionHero />
				<SectionTeam />
				<SectionPartners />
				{ language === 'ru' && <SectionHiring /> }
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

export default LangCompany;
