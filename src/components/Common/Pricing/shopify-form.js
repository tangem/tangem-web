import React, {useState} from 'react'
import * as styles from './pricing.module.scss';

import {t} from "i18next";
import classNames from "classnames";
import Features from "./features";
import Button from "../Button";

const ShopifyForm = ({products, ids}) => {
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
	const [quantity, setQuantity] = useState(1);

	const handleBuy = () => {
		const cardId =`buy-now-${ids[currentPack]}`;

		const elem = document
			.getElementById(cardId)
			.querySelector('iframe')
			.contentDocument
			.querySelector('.shopify-buy__quantity');

		if (elem.value > quantity) {
			const decrement = document
				.getElementById(cardId)
				.querySelector('iframe')
				.contentDocument
				.querySelector('.shopify-buy__quantity-increment');
			for (let i = elem.value; i < quantity; i-- ) {
				decrement.click();
			}
		}

		if (elem.value < quantity) {
			const increment = document
				.getElementById(cardId)
				.querySelector('iframe')
				.contentDocument
				.querySelector('.shopify-buy__quantity-increment');

			for (let i = elem.value; i < quantity; i++ ) {
				increment.click();
			}
		}

		document
			.getElementById(cardId)
			.querySelector('iframe')
			.contentDocument
			.querySelector('.shopify-buy__btn')
			.click()
	}

	return (
		<div className={styles.card}>
			<div className={styles.picture}>
				{ packs[currentPack].image }
			</div>
			<div className={classNames(styles.choice)}>
				<div>
				<div>
					<h3>{ t('pricing.buy.title')}</h3>
					<p>{ t('pricing.buy.description')}</p>
				</div>
				<form className={styles.form}>
					<span >{t('pricing.choice')}</span>
					<fieldset className={styles['check-shopify']}>
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
									<div className={styles['radio-title']}>
										<h4>{ packs[packKey].title }</h4>
										<span>{products[packKey] && `$${products[packKey].price}`}</span>
									</div>
									<p className={styles['radio-description']}>{ packs[packKey].description }</p>
								</label>
							</React.Fragment>
						))}
					</fieldset>
				</form>
				<span className={styles['quantity-label']}>{t('pricing.quantity')}</span>
				<div className={styles.counter}>
					<button
						className={classNames(styles.decrement, {[styles.disabled]: quantity < 2})}
						onClick={()=>setQuantity(v => Math.max(v - 1, 1))}
					></button>
					<span className={styles.quantity}>{quantity}</span>
					<button
						className={styles.increment}
						onClick={()=>setQuantity(v => v + 1)}
					></button>
				</div>
				</div>
				<div className={styles.total} >
					<div>
						<span className={styles.label}>{t('pricing.total')}</span>
						<span className={styles.value}>{
							products[currentPack]
							&& `$${(quantity * products[currentPack].price).toLocaleString('en-US', {currency: 'usd', minimumFractionDigits: 2})}`
						}</span>
					</div>
					<div>
						<Button onClick={handleBuy}>{t('buttons.buy-now')}</Button>
					</div>
				</div>
			</div>
			<Features />
		</div>
	)
}

export default ShopifyForm
