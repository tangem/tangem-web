import {getAllLanguageSlugs, getLanguage} from "../../../../lib/lang";
import Layout from "../../../../components/Common/Layout";
import {t} from "i18next";
import * as styles from "./search.module.scss";
import React, {useEffect, useRef, useState} from "react";
import Header from "../../../../components/Common/Header";
import Footer from "../../../../components/Common/Footer";
import {useRouter} from "next/router";
import {getCodeByLanguage, sectionsConfig} from "../../../../config/faq";

const LangHelpCenterSearch = ({language}) => {
	const search = useRef();
	const router = useRouter()
	const [ query, setQuery ] = useState('');
	const [ resultQuery, setResultQuery ] = useState('');
	const [ results, setResult ] = useState([]);

	useEffect(() => {
		setQuery(router.query.query)
	}, [router.query.query]);

	useEffect(() => {
		async function find() {
			if(query === '') {
				setResult([]);
				return function empty() {}
			}

			const sections = Object.keys(sectionsConfig).join(',')
			const code = getCodeByLanguage(language);
			const res = await fetch(`https://tangem.zendesk.com/api/v2/help_center/articles/search?query=${query}&per_page=100&locale=${code}&&section=${sections}`);
			const {results} = await res.json();
			setResultQuery(query);
			setResult(results);
		}

		find()
	}, [language, query])

	function handleSubmit(e) {
		e.preventDefault();
		const text = search.current.value;
		setQuery(text);
		router.push(`/${language}/help_center/search?query=${text}`);
	}

  function handleReset(e) {
    e.preventDefault();
    search.current.value = '';
    search.current.focus();
  }

  return (
		<Layout title={t('pages.helpCenter.search.title')} description={t('description')}>
			<div className={styles.page}>
				<Header />
				<main >
					<section>
						<h1>{t('pages.helpCenter.search.title')}</h1>
						<form onSubmit={handleSubmit} className={styles.search} action={`/${language}/help_center/search`} >
							<input
								required
								minLength="1"
								maxLength="100"
								type="text"
								name="query"
								placeholder={t('sections.helpCenter.search')}
								defaultValue={query}
                autoComplete="off"
								ref={search}
							/>
              <button type="reset" className={styles.reset} onClick={handleReset} />
						</form>
						<p className={styles.label}>
							{ resultQuery !== '' ? (results.length
									? `${t('pages.helpCenter.search.results', {query: resultQuery})}`
									: `${t('pages.helpCenter.search.noResults', {query: resultQuery})}`)
								: ""
							}
						</p>
					</section>
					<section>
						<ul className={styles.articles}>
							{ results.map(({id, title, body}) => (
								<li key={id}>
									<article className={styles.article}>
										<h2>{title}</h2>
										<div dangerouslySetInnerHTML={{__html: body }} />
									</article>
								</li>
							)) }
						</ul>
					</section>
					</main>
				<Footer />
			</div>
		</Layout>
	);
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

export default LangHelpCenterSearch;
