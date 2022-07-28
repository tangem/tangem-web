import {t} from 'i18next';
import Header from "../../../components/Common/Header";
import React, {useContext, useEffect, useRef, useState} from "react";
import Layout from "../../../components/Common/Layout";
import Footer from "../../../components/Common/Footer";
import {getAllLanguageSlugs, getLanguage} from "../../../lib/lang";
import * as styles from './helpCenter.module.scss';
import Link from "next/link";
import {getCodeByLanguage, sectionsConfig} from "../../../config/faq";
import {ZendeskContext} from "../../../context/zendesk-context";

const LangHelpCenter = ({sections, language}) => {
	const { setNeedOpen, setNeedLoad } = useContext(ZendeskContext);
  const [ isFormActive, setIsFormActive ] = useState(false);
  const search = useRef();
  const form = useRef();

	const videos = [
		{
			id: 'How to setup your Tangem Wallet',
			link: '9ZVsHAKaBgY'
		},
		{
			id: 'How to setup your Tangem Note',
			link: 'cR6phId05fc'
		}
	];

  useEffect(() => {
    setNeedLoad(true);

    function hide() {
      setIsFormActive(false);
    }

     window.addEventListener('click', hide);
    return function remove() {
      window.removeEventListener('click', hide);
      setIsFormActive(false);
    }
  }, []);

  function handleOptionClick(e) {
    search.current.value = e.target.innerText;
    form.current.submit();
  }

  function handleFormClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleReset(e) {
    e.preventDefault();
    e.stopPropagation();
    search.current.value = '';
    search.current.focus();
  }

  const questions = t('sections.helpCenter.questions');

  return (
		<Layout title={t('pages.helpCenter.title')} description={t('description') }>
			<Header isDark={true} />
			<main className={styles.page}>
				<div className={styles.wrapper} >
					<section className={styles.hero}>
						<h1>{ t('sections.helpCenter.title')}</h1>
						<button
							className={styles.button}
							onClick={() => setNeedOpen(true)}
						>
							{t('buttons.contact-support')}
						</button>
						<a href={t('socials.telegram')} target="_blank" className={styles.button} rel="nofollow noopener noreferrer">Telegram chat</a>
					</section>
				</div>
				<section>
					<h2>{t('sections.helpCenter.usingTangem')}</h2>
					<form
            className={styles.search}
            action={`/${language}/help_center/search`}
            onClick={handleFormClick}
            onFocus={()=>setIsFormActive(true)}
            ref={form}
          >
						<input
              ref={search}
							required
							minLength="1"
							maxLength="100"
							type="text"
							name="query"
              autoComplete="off"
							placeholder={t('sections.helpCenter.search')}
              onFocus={()=>setIsFormActive(true)}
						/>
            <button type="reset" className={styles.reset} onClick={handleReset} />
            { isFormActive && questions.length ?
              <ul className={styles.list}>
                {
                  questions.map((question) => <li key={question} onClick={handleOptionClick}>{ question }</li>)
                }
            </ul>: null }
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
							<li key={link}>
								<iframe
									width="375" height="211"
									src={`https://www.youtube.com/embed/${link}?modestbranding=1&controls=0`}
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
