import React, {useState} from 'react'
import * as styles from './pricing.module.scss';
import {t} from "i18next";
import Features from "./features";

const PricingNew = ( ) => {

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
			title: 'MVideo',
			popular: false,
			[packKeys[0]]: 'https://www.mvideo.ru/products/kriptovalutnyi-koshelek-tangem-wallet-nabor-iz-3-kart-10030608/?utm_source=site&utm_medium=cpm&utm_campaign=Vendor_Tangem_Flight_E-%D0%A0_Tangem_Wallet_19.05-31.12.2022_official3',
			[packKeys[1]]: 'https://www.mvideo.ru/products/kriptovalutnyi-koshelek-tangem-wallet-nabor-iz-2-kart-10030607?utm_source=site&utm_medium=cpm&utm_campaign=Vendor_Tangem_Flight_E-%D0%A0_Tangem_Wallet_19.05-31.12.2022_official2',
		},
		{
			id: 'ozon',
			title: 'Ozon',
			popular: true,
			[packKeys[0]]: 'https://www.ozon.ru/product/apparatnyy-multivalyutnyy-kriptokoshelek-tangem-wallet-holodnyy-koshelek-dlya-kriptovalyuty-koshelek-511197244/',
			[packKeys[1]]: 'https://www.ozon.ru/product/apparatnyy-multivalyutnyy-kriptokoshelek-tangem-wallet-holodnyy-koshelek-dlya-kriptovalyuty-koshelek-469122647/',
		},
		{
			id: 'wildberries',
			title: 'Wildberries',
			popular: false,
			[packKeys[0]]: 'https://www.wildberries.ru/catalog/67272316/detail.aspx?targetUrl=BP',
			[packKeys[1]]: 'https://www.wildberries.ru/catalog/67265191/detail.aspx?targetUrl=BP',
		},
		{
			id: 'sbermm',
			title: 'sber megamarket',
			popular: false,
			[packKeys[0]]: 'https://sbermegamarket.ru/catalog/details/kriptovalyutnyy-koshelek-tangem-wallet-nabor-iz-3-kart-600007081321/',
			[packKeys[1]]: 'https://sbermegamarket.ru/catalog/details/apparatnyy-multivalyutnyy-kriptokoshelek-tangem-wallet-600005911702/',
		},
		{
			id: 'citilink',
			title: 'Citilink',
			popular: false,
			[packKeys[0]]: 'https://www.citilink.ru/product/kriptokoshelek-tangem-wallet-pack-of-3-multivalyutnyi-nfc-eal6-android-1730309/',
			[packKeys[1]]: 'https://www.citilink.ru/product/kriptokoshelek-tangem-wallet-pack-of-2-multivalyutnyi-nfc-eal6-android-1730312/',
		},
		{
			id: 'eldorado',
			title: 'Eldorado',
			popular: false,
			[packKeys[0]]: 'https://www.eldorado.ru/cat/detail/kriptovalyutnyy-koshelek-tangem-wallet-nabor-iz-3-kart-tg115x3/',
			[packKeys[1]]: 'https://www.eldorado.ru/cat/detail/kriptovalyutnyy-koshelek-tangem-wallet-nabor-iz-2-kart-tg115x2/',
		},
		{
			id: 'dns',
			title: 'DNS',
			popular: false,
			[packKeys[0]]: 'https://www.dns-shop.ru/product/ae0d79f1f041ed20/kriptokoselek-tangem-wallet-pack-of-3-nfc/',
			[packKeys[1]]: 'https://www.dns-shop.ru/product/b51a1129f041ed20/kriptokoselek-tangem-wallet-pack-of-2-nfc/',
		},
		{
			id: 'yandexmarket',
			title: 'Yandex Market',
			popular: false,
			[packKeys[0]]: 'https://market.yandex.ru/product--kriptokoshelek-tangem-wallet-nabor-iz-3-kart/1756706099?cpa=1',
			[packKeys[1]]: 'https://market.yandex.ru/product--apparatnyi-multivaliutnyi-kriptokoshelek-tangem-wallet-kholodnyi-koshelek-dlia-kriptovaliuty-koshelek-dlia-kriptovaliut-kriptokoshelek-kholodnyi/1737017403?sku=101650591952&cpa=1',
		},
	]
	const [currentPack, setCurrentPack] = useState(packKeys[0]);

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
						{ resellers.map((item) => (
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

export default PricingNew
