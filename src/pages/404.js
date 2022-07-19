import i18next, {t} from "i18next";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import * as styles from "./404.module.scss";
import Footer from "../components/Common/Footer";
import {useRouter} from "next/router";
import {getLanguage} from "../lib/lang";
import Layout from "../components/Common/Layout";

export default function LangCustom404() {
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
		<Layout title={ t('title') } description={t('description')} >
			<div className={styles.layout}>
				<main className={styles.main}>
					<h1 className={styles.code}>404</h1>
					<h2 className={styles.title}>{t('404.title')}</h2>
					<p className={styles.text}>{t('404.description')} <a className={styles.email} href="mailto:support@tangem.com">support@tangem.com</a></p>
					<Link href={`/${lang}/`}>
						<a className={styles.button}>{t('404.goHome')}</a>
					</Link>
				</main>
				<Footer />
			</div>
		</Layout>
	)
}
