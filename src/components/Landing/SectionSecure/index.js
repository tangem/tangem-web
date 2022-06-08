import React from 'react'
import Link from 'next/link'
import styles from './secure.module.scss'
import {t} from "i18next";
import classNames from "classnames";


const SectionSecure = () => {

  return (
		<section className={styles.secure}>
			<div className={classNames(styles.banner, styles.phone)} >
				<div className={styles.title}>
					<div className={styles.wrapper}>
						<h3>{t('sections.mobile.title')}</h3>
						<p>{ t('sections.mobile.description') }</p>
						<div className={styles.links} >
							<Link href="https://apps.apple.com/ru/app/tangem/id1354868448?l=en">
								<a>
									<img src='/img/secure/icon-apple.png' alt='Tangem Mobile App image' loading='lazy' decoding='async' />
								</a>
							</Link>
							<Link href="https://play.google.com/store/apps/details?id=com.tangem.wallet&hl=en&gl=US">
								<a>
									<img src='/img/secure/icon-google.png' alt='Tangem Mobile App image' loading='lazy' decoding='async' />
								</a>
							</Link>
							<Link href="https://github.com/tangem/tangem-binaries/raw/master/app-release.apk">
								<a>
									<img src='/img/secure/icon-android-apk.png' alt='Tangem Mobile App image' loading='lazy' decoding='async' />
								</a>
							</Link>
						</div>
					</div>
					<div className={styles.github}>
						<span>{ t('sections.mobile.on-github') }</span>
						<div className={styles.ghname}>
							<img width="24" height="24" src='/svg/github-repo.svg' alt='GitHub'/>
							<span>GitHub</span>
						</div>
					</div>
				</div>
				<picture>
					<source media='(min-width: 768px)' srcSet="/img/secure/secure@1x.avif 1x, /img/secure/secure@2x.avif 2x" type="image/avif" />
					<source media='(min-width: 768px)' srcSet="/img/secure/secure@1x.webp 1x, /img/secure/secure@2x.webp 2x" type="image/webp" />
					<source media='(min-width: 768px)' srcSet="/img/secure/secure@1x.png 1x, /img/secure/secure@2x.png 2x" type="image/png" />
					<source srcSet="/img/secure/secure-mobile@1x.avif 1x, /img/secure/secure-mobile@2x.avif 2x" type="image/avif" />
					<source srcSet="/img/secure/secure-mobile@1x.webp 1x, /img/secure/secure-mobile@2x.webp 2x" type="image/webp" />
					<img
						loading='lazy'
						decoding='async'
						alt='Tangem hero image'
						src='/img/secure/secure-mobile@1x.png'
						srcSet="/img/secure/secure-mobile@2x.png 2x"
					/>
				</picture>
				<img
					loading='lazy'
					decoding='async'
					alt='Tangem hero image'
					src='/svg/qr.svg'
					className={styles.qrcode}
				/>
			</div>
		</section>
  )
}

export default SectionSecure
