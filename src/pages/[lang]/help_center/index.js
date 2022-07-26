import {t} from 'i18next';
import Header from "../../../components/Common/Header";
import React, {useContext} from "react";
import Layout from "../../../components/Common/Layout";
import Footer from "../../../components/Common/Footer";
import {getAllLanguageSlugs, getLanguage} from "../../../lib/lang";
import * as styles from './helpCenter.module.scss';
import SearchIcon from '../../../../public/svg/help/search.svg';
import Link from "next/link";
import {getCodeByLanguage, sectionsConfig} from "../../../config/faq";
import {ZendeskContext} from "../../../context/zendesk-context";

const LangHelpCenter = ({sections, language}) => {
	const { setNeedOpen, setNeedLoad } = useContext(ZendeskContext);

	const videos = [
		{
			id: 'How to setup your Tangem Wallet',
			link: 'https://www.youtube.com/embed/9ZVsHAKaBgY'
		},
		{
			id: 'How to setup your Tangem Note',
			link: 'https://www.youtube.com/embed/cR6phId05fc'
		}
	];

	return (
		<Layout title={t('pages.partnership.title')} description={t('description') }>
			<Header isDark={true} />
			<main className={styles.page}>
				<div className={styles.wrapper} >
					<section className={styles.hero}>
						<h1>{ t('sections.helpCenter.title')}</h1>
						<button
							className={styles.button}
							onClick={() => setNeedOpen(true)}
							onMouseOver={() => setNeedLoad(true)}
						>
							{t('buttons.contact-support')}
						</button>
						<a href={t('socials.telegram')} className={styles.button}>Telegram chat</a>
					</section>
				</div>
				<section>
					<h2>{t('sections.helpCenter.usingTangem')}</h2>
					<form className={styles.search} action={`/${language}/help_center/search`} >
						<SearchIcon />
						<input
							required
							minLength="1"
							maxLength="100"
							type="text"
							name="query"
							placeholder={t('sections.helpCenter.search')}
						/>
					</form>
				</section>
				<section>
					<ul className={styles.sections}>
						{ sections && sections.filter(({ id }) => sectionsConfig[id])
							.map(({name, id, description}) => (
							<li key={id}>
								<Link href={`/${language}/help_center/${sectionsConfig[id].slug}`}>
									<a className={styles.card}>
										<h3>{name}</h3>
										<p>{description}</p>
										{ sectionsConfig[id].icon}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</section>
				<section>
					<h2>{t('sections.helpCenter.getStarted')}</h2>
					<ul className={styles.videos}>
						{ videos.map(({id, link})=> (
							<li key={id}>
								<iframe
									width="375" height="211"
									src={link}
									title={id}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</li>
						))}
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
	const code = getCodeByLanguage(language);
	const res = await fetch(`https://tangem.zendesk.com/api/v2/help_center/${code}/sections.json`);
	const { sections } = await res.json();

	return {
		props: {
			language,
			sections,
		},
	};
}

export default LangHelpCenter;
