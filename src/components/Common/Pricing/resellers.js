import React, {useEffect, useState} from 'react'
import * as styles from './pricing.module.scss';
import i18next, {t} from "i18next";
import {TANGEM_RESELLERS_API_URI} from "../../../config";
import Features from "./features";

const Resellers = ( ) => {
	const {language} = i18next;
	const packKeys = ['pack3', 'pack2'];

	const packs = {
		[packKeys[0]]: {
			title: t('pricing.pack3.title'),
			description: t('pricing.pack3.description'),
			image: <picture className={styles.img}>
				<source srcSet="/img/packs/pack3@1x.avif 1x, /img/packs/pack3@2x.avif 2x" type="image/avif" />
				<source srcSet="/img/packs/pack3@1x.webp 1x, /img/packs/pack3@2x.webp 2x" type="image/webp" />
				<img
					loading='lazy'
					decoding='async'
					alt='Pack of 3 Cards'
					src='/img/packs/pack3@1x.png'
					srcSet="/img/packs/pack3@2x.png 2x"
				/>
			</picture>
		},
		[packKeys[1]]: {
			title: t('pricing.pack2.title'),
			description: t('pricing.pack2.description'),
			image: <picture className={styles.img}>
				<source srcSet="/img/packs/pack2@1x.avif 1x, /img/packs/pack2@2x.avif 2x" type="image/avif" />
				<source srcSet="/img/packs/pack2@1x.webp 1x, /img/packs/pack2@2x.webp 2x" type="image/webp" />
				<img
					loading='lazy'
					decoding='async'
					alt='Pack of 2 Cards'
					src='/img/packs/pack2@1x.png'
					srcSet="/img/packs/pack2@2x.png 2x"
				/>
			</picture>
		}
	};

	const [currentPack, setCurrentPack] = useState(packKeys[0]);
	const [isLoading, setLoading] = useState(false);
	const [list, setList] = useState([]);

	useEffect(() => {
		async function getResellers() {
			setLoading(true);
			try {
				const response = await fetch(`${TANGEM_RESELLERS_API_URI}?defaultCode=${language}`);
				const data = await response.json()
				setList(data.resellers);
			} finally {
				setLoading(false);
			}
		}

		getResellers();
	}, []);

	return (
		<div className={styles.card}>
			<div className={styles.picture}>
				{ packs[currentPack].image }
			</div>
			<div className={styles.choice}>
				<div>
					<h3>{ t('pricing.buy.title')}</h3>
					<p>{ t('pricing.buy.description')}</p>
				</div>
				<form className={styles.form}>
					<span >{t('pricing.choice')}</span>
					<fieldset className={styles.reseller}>
						{ packKeys.map((packKey) =>(
							<React.Fragment key={packKey}>
								<input
									type="radio"
									name="pack"
									value={packKey}
									id={packKey}
									checked={packKey === currentPack}
									onChange={ () => setCurrentPack(packKey)}
									className={styles.radio}
								/>
								<label htmlFor={packKey}>
									<h4 className={styles['radio-title']}>{ packs[packKey].title }</h4>
									<p className={styles['radio-description']}>{ packs[packKey].description }</p>
								</label>
							</React.Fragment>
						))}

					</fieldset>
				</form>
				<span className={styles.stories}>{t('pricing.stores')}</span>
				<div className={styles.scroll}>
					<ul className={styles.list}>
						{ list.map((item) => (
							<li key={item.id}>
								<img
									loading='lazy'
									decoding='async'
									alt={item.title}
									src={`/img/resellers/${item.id}@1x.png`}
									srcSet={`/img/resellers/${item.id}@2x.png 2x`}
								/>
								<a target='_blank' href={item[currentPack]} rel="noreferrer">{t('buttons.buy')}</a>
							</li>
						))
						}
					</ul>
				</div>
			</div>
			<Features />
		</div>
	)
}

export default Resellers;
