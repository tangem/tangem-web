import React from 'react';
import {t} from "i18next";
import * as styles from './hiring.module.scss';

const SectionHiring = () => {

	return (
		<section className={styles.banner}>
			<h4 className={styles.title}>{ t('sections.hiring.title') }</h4>
			<p className={styles.description}>{ t('sections.hiring.description') }</p>
			<a className={styles.link} target="_blank" href="https://hh.ru/employer/3392039?hhtmFrom=vacancy_search_list" rel="nofollow noreferrer">
				{ t('buttons.join-us') }
			</a>
		</section>
	);
}

export default SectionHiring;
