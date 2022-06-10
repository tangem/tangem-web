import React from 'react';
import * as styles from './hero.module.scss';
import {t} from "i18next";

const SectionHero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.title}>
				<span>{ t('sections.partnership.label') }</span>
				<h1>{ t('sections.partnership.title') }</h1>
				<p>{ t('sections.partnership.description') }</p>
			</div>
			<div className={styles.image}>
				<picture>
					<source srcSet="/img/business/business-hero@1x.avif 1x, /img/business/business-hero@2x.avif 2x" type="image/avif" />
					<source srcSet="/img/business/business-hero@1x.webp 1x, /img/business/business-hero@2x.webp 2x" type="image/webp" />
					<img
						loading='lazy'
						decoding='async'
						alt='Tangem hero image'
						src='/img/business/business-hero@1x.png'
						srcSet="/img/business/business-hero@2x.png 2x"
					/>
				</picture>
			</div>
		</section>
	);
}

export default SectionHero;
