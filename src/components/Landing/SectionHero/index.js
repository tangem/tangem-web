import React, {useState} from 'react';
import styles from './hero.module.scss';
import { t } from 'i18next';

const SectionHero = ({ toggleBuy }) => {

	const link = `https://www.youtube.com/embed/${ t('video.id') }?autoplay=1`;

	const [videoStarted, setVideoStarted] = useState(false);

  return (
		<section className={styles.hero}>
			<div className={styles.grid}>
		    <div className={styles.title}>
			    <h1>{ t('sections.safe.title') }</h1>
			    <p>{ t('sections.safe.description') }</p>
			    <button onClick={toggleBuy}>{ t('buttons.buy-now') }</button>
				</div>
				<div className={styles.phone}>
					<picture>
						<source media='(min-width: 768px)' srcSet="/img/hero/phone@1x.avif 1x, /img/hero/phone@2x.avif 2x" type="image/avif" />
						<source media='(min-width: 768px)' srcSet="/img/hero/phone@1x.webp 1x, /img/hero/phone@2x.webp 2x" type="image/webp" />
						<source media='(min-width: 768px)' srcSet="/img/hero/phone@1x.png 1x, /img/hero/phone@2x.png 2x" type="image/png" />
						<source srcSet="/img/hero/phone-mobile@1x.avif 1x, /img/hero/phone-mobile@2x.avif 2x" type="image/avif" />
						<source srcSet="/img/hero/phone-mobile@1x.webp 1x, /img/hero/phone-mobile@2x.webp 2x" type="image/webp" />
						<img
							loading='lazy'
							decoding='async'
							alt='Tangem hero image'
							src='/img/hero/phone-mobile@1x.png'
							srcSet="/img/hero/phone-mobile@2x.png 2x"
						/>
					</picture>
				</div>
			</div>
			<div className={styles.video}>
				<div className={styles.frame}>
					{!videoStarted ?
						<>
							<picture>
								<source media='(min-width: 768px)' srcSet="/img/hero/video-cover@1x.avif 1x, /img/hero/video-cover@2x.avif 2x" type="image/avif" />
								<source media='(min-width: 768px)' srcSet="/img/hero/video-cover@1x.webp 1x, /img/hero/video-cover@2x.webp 2x" type="image/webp" />
								<source media='(min-width: 768px)' srcSet="/img/hero/video-cover@1x.png 1x, /img/hero/video-cover@2x.png 2x" type="image/png" />
								<source srcSet="/img/hero/video-cover-mobile@1x.avif 1x, /img/hero/video-cover-mobile@2x.avif 2x" type="image/avif" />
								<source srcSet="/img/hero/video-cover-mobile@1x.webp 1x, /img/hero/video-cover-mobile@2x.webp 2x" type="image/webp" />
								<img
									loading='lazy'
									decoding='async'
									alt='Tangem hero image'
									src='/img/hero/video-cover-mobile@1x.png'
									srcSet="/img/hero/video-cover-mobile@2x.png 2x"
								/>
							</picture>
							<button className={styles.play} onClick={() => setVideoStarted(true)}>
								<img src='/svg/play.svg' alt='play' loading='lazy' />
							</button>
						</>:
						<iframe
							width='100%'
							height='100%'
							src= { link }
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					}
				</div>
			</div>
		</section>
  )
}

export default SectionHero
