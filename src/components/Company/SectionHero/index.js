import React from 'react';
import {t} from "i18next";
import * as styles from './hero.module.scss'

const SectionHero = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>{t('sections.company.title')}</h1>
			<p className={styles.description}>{t('sections.company.description')}</p>
			<div  className={styles.quote}>{t('sections.company.quote')}</div>
			<p className={styles.about}>{t('sections.company.about-1')}</p>
			<p  className={styles.about}>{t('sections.company.about-2')}</p>
		</section>
	);
}

export default SectionHero;
