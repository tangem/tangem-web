import React, { useState } from 'react';
import styles from './hero.module.scss';
import {t} from 'i18next';
import classNames from "classnames";
import YouTubeVideo from "../../Common/YouTubeVideo";
import Button from "../../Common/Button";

const SectionHero = ({ toggleBuy }) => {
	const [videoStarted, setVideoStarted] = useState(false);

	return (
		<section className={styles.hero}>
			<div className={styles.grid}>
		    <div className={classNames(styles.title, {[styles.long]: true })}>
			    <h1>{ t('sections.safe.title') }</h1>
			    <p>{ t('sections.safe.description') }</p>
			    <Button onClick={toggleBuy} appearance='primary' theme='light'>{ t('buttons.buy-now') }</Button>
				</div>
				<div className={styles.phone}>
					<picture>
						<source media='(min-width: 768px)' srcSet="/img/hero/phone@1x.avif 1x, /img/hero/phone@2x.avif 2x" type="image/avif" />
						<source media='(min-width: 768px)' srcSet="/img/hero/phone@1x.webp 1x, /img/hero/phone@2x.webp 2x" type="image/webp" />
						<source media='(min-width: 768px)' srcSet="/img/hero/phone@1x.png 1x, /img/hero/phone@2x.png 2x" type="image/png" />
						<source srcSet="/img/hero/phone-mobile@1x.avif 1x, /img/hero/phone-mobile@2x.avif 2x" type="image/avif" />
						<source srcSet="/img/hero/phone-mobile@1x.webp 1x, /img/hero/phone-mobile@2x.webp 2x" type="image/webp" />
						<img
							alt={t('sections.safe.title')}
							src='/img/hero/phone-mobile@1x.png'
							srcSet="/img/hero/phone-mobile@2x.png 2x"
							height={711}
							width={520}
						/>
					</picture>
				</div>
			</div>
			<div className={styles.video}>
				<div className={styles.frame}>
					<button className={styles.play} onClick={() => setVideoStarted(true)}>
						<img src='/svg/play.svg' alt='play' loading='lazy' />
					</button>
					{ videoStarted && <div className={styles.youtube}><YouTubeVideo videoId={t('video.id')} /></div> }
				</div>
			</div>
		</section>
  )
}

export default SectionHero;
