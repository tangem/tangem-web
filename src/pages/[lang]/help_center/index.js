import {t} from 'i18next';
import Header from "../../../components/Common/Header";
import React from "react";
import useModal from "../../../hooks/useModal";
import Layout from "../../../components/Common/Layout";
import Footer from "../../../components/Common/Footer";
import {getAllLanguageSlugs, getLanguage} from "../../../lib/lang";
import * as styles from './helpCenter.module.scss';

const LangHelpCenter = () => {
	const { isShowing: isBuyShowing, toggle: toggleBuy } = useModal('pricing')

	return (
		<Layout title={t('pages.partnership.title')} description={t('description') }>
			<Header isDark={true} toggleBuy={toggleBuy} />
			<main className={styles.page}>
				<div className={styles.wrapper} >
					<section className={styles.hero}>
						<h1>We’re here to help</h1>
						<button className={styles.button}>Contact Support</button>
						<a className={styles.button}>Telegram chat</a>
					</section>
				</div>
				<section>
					<h1>We’re here to help</h1>
					<button>Contact Support</button>
					<a>Telegram chat</a>
				</section>
				<section>
					<h2>Using Tangem</h2>
					<form>
						<input type="text" />
						<ul>
							<li>1</li>
						</ul>
					</form>
				</section>
				<section>
					<h2>Get started</h2>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</section>
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

export default LangHelpCenter;
