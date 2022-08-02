import {getLanguage, getSortedLangsData} from "../../../../lib/lang";
import {getCodeByLanguage, sectionsConfig} from "../../../../config/faq";
import {t} from "i18next";
import Layout from "../../../../components/Common/Layout";
import Header from "../../../../components/Common/Header";
import * as styles from "./section.module.scss";
import Footer from "../../../../components/Common/Footer";
import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import ReactHtmlParser from "react-html-parser";

const Accordion = ({ id, title, body }) => {

  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useEffect(()=> {
    if (id === parseInt(window.location.hash.slice(2), 10)) {
      setIsActive(true);
    }
  }, [id]);

  useEffect(() => {
    if(!ref.current) {
      return function empty() {
        //
      }
    }
    ref.current.style.maxHeight = isActive ? ref.current.scrollHeight + "px" : null;
  }, [isActive]);

  return (
    <li onClick={() => setIsActive((v) => !v)}>
      <article className={classNames(styles.article, {[styles.active]: isActive})} >
        <h2>{title}</h2>
        <button className={styles.button}></button>
        <div className={styles.body} ref={ref}>{ReactHtmlParser(body)}</div>
        <div className={styles.link} id={`a${id}`}></div>
      </article>
    </li>
  );
};

const LangHelpCenterSection = ({ language, articles, section}) => {
	const breadcrumbs = [
		{
			href: `/${language}/help_center`,
			name: t('menu.helpCenter'),
		},
		{
			name: section.name
		}];
	const [currentArticleId, setCurrentArticleId] = useState('a0');
	const [clickedArticleId, setClickedArticleId] = useState('');

	useEffect(() => {
    const { hash } = window.location;
		if (hash) {
      try {
        const elem = document.querySelector(hash);
        if (elem) {
          if (window.innerWidth >= 768) {
            setClickedArticleId(hash.slice(1));
          } else {
            setCurrentArticleId(hash.slice(1))
          }
          return function empty() {}
        }
      } catch (e) {

      }
		}
    if (window.innerWidth >= 768) {
      const [first] = document.getElementsByClassName(styles.link);
      if (first) {
        setClickedArticleId(first.getAttribute('id'));
      }
    }
	}, [])

	useEffect(() => {
    if (window.innerWidth < 768) {
      return function empty() {}
    }
		let startPosition = 0;
		const [first, ...rest] = document.getElementsByClassName(styles.link);

		if (first) {
			const { top } = first.getBoundingClientRect();
			startPosition = top;
		}
		let positions = [];
		for (const elem of rest) {
			const { top } = elem.getBoundingClientRect();
			positions = [...positions, { top: top - startPosition, id: elem.id }];
		}
		let scrollTimeout;

		function handleScroll() {
			if (!first) {
				return function empty() {}
			}
			if (clickedArticleId) {
				clearTimeout(scrollTimeout);
				scrollTimeout = setTimeout(() => {
					window.location.hash = clickedArticleId;
					setCurrentArticleId(clickedArticleId);
					setClickedArticleId('');
					}, 100);
			} else {
				const topPage = window.pageYOffset || document.documentElement.scrollTop;
				let currentId = first.id;
				for (const {top, id} of positions) {
					if (topPage < top) {
						break;
					}
					if (topPage >= top) {
						currentId = id;
					}
				}
				setCurrentArticleId(currentId);
			}
		}
		let passiveSupported = false;
		try {
			window.addEventListener(
				"test",
				null,
				Object.defineProperty({}, "passive", { get: function() { passiveSupported = true; } }));
		} catch(err) {}

		window.addEventListener('scroll', handleScroll, passiveSupported ? { passive: true } : false);
		return function removeListener() {
			window.removeEventListener('scroll', handleScroll, passiveSupported ? { passive: true } : false);
		}
	}, [clickedArticleId]);

	useEffect(() => {
    if (clickedArticleId !== '') {
      return function empty() {}
    }

		if (currentArticleId === 'a0') {
			return function empty() {}
		}

		const selector = `#link-${currentArticleId}`;
		const element = document.querySelector(selector);
		if (!element) {
			return function empty() {}
		}
		const scroll = document.querySelector(`.${styles.scroll}`);
		const { height, top: startScroll } = scroll.getBoundingClientRect();
		const { top, bottom } = element.getBoundingClientRect();
		if (top < startScroll) {
			scroll.scrollTo({
				top: Math.max(scroll.scrollTop + top - startScroll, 0),
				behavior: "smooth"
			});
		}
		if (bottom - startScroll > height) {
			scroll.scrollTo({
				top: scroll.scrollTop + bottom - startScroll - height,
				behavior: "smooth"
			});
		}
	}, [currentArticleId, clickedArticleId]);


	useEffect(() => {
		if (['a0', ''].includes(clickedArticleId)) {
			return function empty() {}
		}
		const elem = document.querySelector(`#${clickedArticleId}`);
		if (elem) {
			elem.scrollIntoView({
				behavior: 'smooth',
				block: "start",
			});
			setCurrentArticleId(clickedArticleId);
		}
	}, [clickedArticleId])

	function handleClick(e) {
		e.preventDefault();
		const elem = document.querySelector(e.target.getAttribute('href'));
		setClickedArticleId(elem.id);
	}

	return (
		<Layout title={section.name} description={t('description') }>
			<Header isDark={true} breadcrumbs={breadcrumbs} />
			<div className={styles.wrapper}>
				<aside>
					<div className={styles.scroll}>
						<ul className={styles.menu}>
							{ articles.articles.map(({title, id}) => (
								<li key={id}>
									<a
										onClick={handleClick}
										className={classNames({[styles.current]: `a${id}` === currentArticleId })}
										href={`#a${id}`}
										id={`link-a${id}`}
									>
										{title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</aside>
				<main>
					<h1 className={styles['visually-hidden']}>{section.name}</h1>
					<ul className={styles.articles}>
						{ articles.articles.map(({title, id, body}) => (
              <Accordion key={id} id={id} title={title} body={body} />
						))}
					</ul>
				</main>
			</div>
			<Footer />
		</Layout>
	);
}

export async function getStaticPaths() {
	const languages = getSortedLangsData();
	const slugs = Object.keys(sectionsConfig).map((key) => sectionsConfig[key].slug);
	let paths = [];
	for (const lang of languages) {
		for (const section of slugs) {
			paths = [...paths, { params: { lang, section }}]
		}
	}

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const language = getLanguage(params.lang);
	const code = getCodeByLanguage(language);
	const id = Object.keys(sectionsConfig).find(key => sectionsConfig[key].slug === params.section);
	const resSection = await fetch(`https://tangem.zendesk.com/api/v2/help_center/${code}/sections/${id}`);
	const { section } = await resSection.json();
	const res = await fetch(`https://tangem.zendesk.com/api/v2/help_center/${code}/sections/${id}/articles`);
	const articles = await res.json();
	return {
		props: {
			language,
			articles,
			section,
		},
	};
}

export default LangHelpCenterSection;
