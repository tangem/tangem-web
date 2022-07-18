import i18next, {t} from "i18next";
import Head from "next/head";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import * as styles from "./404.module.scss";
import Footer from "../components/Common/Footer";
import {useRouter} from "next/router";
import {getLanguage} from "../lib/lang";

export default function LangCustom404() {
	const {language} = i18next;
	const router = useRouter();

	const [lang, setLang] = useState(getLanguage(''));
	const [isFind, setIsFind] = useState(false);

	useEffect(() => {
		const [, lang] = router.asPath.split('/');
		setLang(lang);

	} ,[router.asPath]);

	useEffect(()=> {
		i18next.changeLanguage(lang)
			.then(() => setIsFind(true));
	}, [lang])

	return isFind && (
		<>
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name="title" content={ t('title') } />
				<meta name="description" content={ t('description') } />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://tangem.com" />
				<meta property="og:site_name" content={ t('title') } />
				<meta property="og:title" content={ t('title') } />
				<meta property="og:description" content={ t('description') } />
				<meta property="og:image" content="https://tangem.com/img/hero/phone@1x.png" />
				<meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
				<meta property="og:locale" content="en_US" />
				<title>{ t('title')}</title>
				<link rel='shortcut icon' href='/img/favicon/favicon.png' />
				<link rel='apple-touch-icon' href='/img/favicon/favicon-180.png' />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.code}>404</h1>
				<h2 className={styles.title}>{t('404.title')}</h2>
				<p className={styles.text}>{t('404.description')} <a className={styles.email} href="mailto:support@tangem.com">support@tangem.com</a></p>
				<Link href={`/${language}/`}>
					<a className={styles.button}>{t('404.goHome')}</a>
				</Link>
			</main>
			<Footer />
		</>
	)
}
