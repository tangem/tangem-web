import React, {useState} from 'react'
import * as styles from './pricing.module.scss';
import OzonIcon from '../../../../public/svg/ozon.svg'
import WildberriesIcon from '../../../../public/svg/wildberries.svg'
import MVideoIcon from '../../../../public/svg/mvideo.svg'
import DeliveryIcon from '../../../../public/svg/delivery.svg'
import ReturnIcon from '../../../../public/svg/return.svg'
import SupportIcon from '../../../../public/svg/support.svg'

import {t} from "i18next";

const PricingNew = ( ) => {

	const features = [
		{
			id: 'delivery',
			text: t('pricing.features.delivery'),
			icon: <DeliveryIcon />
		},
		{
			id: 'return',
			text: t('pricing.features.return'),
			icon: <ReturnIcon />
		},
		{
			id: 'support',
			text: t('pricing.features.support'),
			icon: <SupportIcon />
		}
	]

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
	const resellers = [
		{
			id: 'mvideo',
			title: 'mvideo',
			icon: <MVideoIcon />,
			popular: false,
			[packKeys[0]]: 'https://www.mvideo.ru/products/kriptovalutnyi-koshelek-tangem-wallet-nabor-iz-3-kart-10030608/?utm_source=site&utm_medium=cpm&utm_campaign=Vendor_Tangem_Flight_E-%D0%A0_Tangem_Wallet_19.05-31.12.2022_official3',
			[packKeys[1]]: 'https://www.mvideo.ru/products/kriptovalutnyi-koshelek-tangem-wallet-nabor-iz-2-kart-10030607?utm_source=site&utm_medium=cpm&utm_campaign=Vendor_Tangem_Flight_E-%D0%A0_Tangem_Wallet_19.05-31.12.2022_official2',
		},
		{
			id: 'ozon',
			title: 'ozon',
			icon: <OzonIcon />,
			popular: true,
			[packKeys[0]]: 'https://www.ozon.ru/product/apparatnyy-multivalyutnyy-kriptokoshelek-tangem-wallet-holodnyy-koshelek-dlya-kriptovalyuty-koshelek-511197244/',
			[packKeys[1]]: 'https://www.ozon.ru/product/apparatnyy-multivalyutnyy-kriptokoshelek-tangem-wallet-holodnyy-koshelek-dlya-kriptovalyuty-koshelek-469122647/',
		},
		{
			id: 'wildberries',
			title: 'wildberries',
			icon: <WildberriesIcon />,
			popular: false,
			[packKeys[0]]: 'https://www.wildberries.ru/catalog/67272316/detail.aspx?targetUrl=BP',
			[packKeys[1]]: 'https://www.wildberries.ru/catalog/67265191/detail.aspx?targetUrl=BP',
		},
	]
	const [currentPack, setCurrentPack] = useState(packKeys[0]);

	return (
		<div className={styles.card}>
			<div className={styles.picture}>
				{ packs[currentPack].image }
			</div>
			<div className={styles.choice}>
				<h3>{ t('pricing.buy.title')}</h3>
				<p>{ t('pricing.buy.description')}</p>
				<form>
					<span>{t('pricing.choice')}</span>
					<fieldset>
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
									<h4>{ packs[packKey].title }</h4>
									<p>{ packs[packKey].description }</p>
								</label>
							</React.Fragment>
						))}

					</fieldset>
				</form>
				<span className={styles.stories}>{t('pricing.stores')}</span>
				<ul className={styles.list}>
					{ resellers.map((item) => (
						<li key={item.id}>
								{ item.icon }
								<a target='_blank' href={item[currentPack]}>Buy</a>
						</li>
					))
					}
				</ul>
			</div>
			<div className={styles.props}>
				{ features.map(({id, icon, text}) => (
					<div key={id} className={styles.prop}>
						{icon}
						<p>{text}</p>
					</div>
				)) }
			</div>
		</div>
	)
}

export default PricingNew
