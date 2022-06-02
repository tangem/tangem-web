import React from 'react';
import * as styles from './world.module.scss';

import i18next, {t} from "i18next";



const SectionWorld = () => {
	const { language } = i18next;
	const srcMap = language === 'ru' ? 'map-ru' : 'map';

  return (
		<section className={styles.section}>
			<div className={styles.banner}>
				<div className={styles.title}>
					<h3>{ t('sections.world.title') }</h3>
					<p>{ t('sections.world.description') }</p>
				</div>
				<div className={styles.world}>
					<picture>
						<source
							srcSet={`/img/business/${srcMap}@1x.avif 1x, /img/business/${srcMap}@2x.avif 2x`}
							type="image/avif"
							media='(min-width: 768px)'
						/>
						<source
							srcSet={`/img/business/${srcMap}@1x.png 1x, /img/business/${srcMap}@2x.png 2x`}
							type="image/png"
							media='(min-width: 768px)'
						/>
						<source
							srcSet={`/img/business/${srcMap}-mobile@1x.avif 1x, /img/business/${srcMap}-mobile@2x.avif 2x`}
							type="image/avif"
						/>
						<img
							loading='lazy'
							decoding='async'
							alt='Tangem hero image'
							src={`/img/business/${srcMap}-mobile@1x.png`}
							srcSet={`/img/business/${srcMap}-mobile@2x.png 2x`}
						/>
					</picture>
					<div className={styles.counter}>{ t('sections.world.cards') }</div>
				</div>
			</div>
			<div className={styles.banner}>
				<div className={styles.delivery}>
					<div className={styles.title}>
						<h3>{ t('sections.delivery.title') }</h3>
						<p>{ t('sections.delivery.description') }</p>
					</div>
					<picture>
						<source
							srcSet="/img/business/delivery@1x.avif 1x, /img/business/delivery@2x.avif 2x"
							type="image/avif"
							media='(min-width: 768px)'
						/>
						<source
							srcSet="/img/business/delivery@1x.png 1x, /img/business/delivery@2x.png 2x" type="image/png"
							media='(min-width: 768px)'
						/>
						<source
							srcSet="/img/business/delivery-mobile@1x.avif 1x, /img/business/delivery-mobile@2x.avif 2x" type="image/avif"
						/>
						<img
							loading='lazy'
							decoding='async'
							alt='Tangem hero image'
							src="/img/business/delivery-mobile@1x.png"
							srcSet="/img/business/delivery-mobile@1x.png 1x /img/business/delivery@2x.png 2x"
						/>
					</picture>
				</div>
			</div>
		</section>
  )
}

export default SectionWorld;
