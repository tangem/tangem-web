import React from 'react';
import * as styles from './hero.module.scss'

const SectionHero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.title}>
				<button>
					Partner Programs
				</button>
				<h1>Grow your business with Tangem</h1>
				<p>Take your business to the next level by joining our growing network of partners.</p>
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
