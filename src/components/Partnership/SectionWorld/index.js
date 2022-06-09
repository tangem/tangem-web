import React from 'react';
import * as styles from './world.module.scss';
import i18next, {t} from "i18next";

const SectionWorld = () => {
	const { language } = i18next;
	const srcMap = language === 'ru' ? 'map-ru' : 'map';
	const srcDelivery = language === 'ru' ? 'delivery-ru' : 'delivery';

  return (
		<section className={styles.section}>
			<div className={styles.banner}>
				<div className={styles.title}>
					<h3>{ t('sections.world.title') }</h3>
					<p>{ t('sections.world.description').replace('0 0', "0\u00a00") }</p>
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
							alt={ t('sections.world.title') }
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
							srcSet={`/img/business/${srcDelivery}@1x.avif 1x, /img/business/${srcDelivery}@2x.avif 2x`}
							type="image/avif"
							media='(min-width: 768px)'
						/>
						<source
							srcSet={`/img/business/${srcDelivery}@1x.png 1x, /img/business/${srcDelivery}@2x.png 2x`}
							type="image/png"
							media='(min-width: 768px)'
						/>
						<source
							srcSet={`/img/business/${srcDelivery}-mobile@1x.avif 1x, /img/business/${srcDelivery}-mobile@2x.avif 2x`}
							type="image/avif"
						/>
						<img
							loading='lazy'
							decoding='async'
							alt={ t('sections.delivery.title') }
							src={`/img/business/${srcDelivery}-mobile@1x.png`}
							srcSet={`/img/business/${srcDelivery}-mobile@2x.png 2x`}
						/>
					</picture>
				</div>
			</div>
		</section>
  )
}

export default SectionWorld;
