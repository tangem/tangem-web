import React from 'react';
import * as styles from './affiliate.module.scss';
import PromoteIcon from "../../../../public/svg/promote.svg";
import SellIcon from "../../../../public/svg/sell.svg";
import DeliveryIcon from "../../../../public/svg/delivery2.svg";
import RevenueIcon from "../../../../public/svg/revenue.svg";
import {t} from "i18next";
import ModalNew from "../../Common/Modal";
import ContactForm from "../ContactForm";
import useModal from "../../../hooks/useModal";

const SectionAffiliate = () => {

	const { isShowing: isFormShowing, toggle: toggleForm } = useModal('contactUsAffiliate');
	const features = [
		{
			id: "promote",
			icon: <PromoteIcon />,

		},
		{
			id: "sell",
			icon: <SellIcon />,
		},
		{
			id: "delivery",
			icon: <DeliveryIcon />
		},
		{
			id: "revenue",
			icon: <RevenueIcon />
		}
	]

	return (
		<section className={styles.section} >
			<div className={styles.affiliate}>
				<div className={styles.title}>
					<h2>{ t('sections.affiliate.title')}</h2>
					<p>{ t('sections.affiliate.description')}</p>
				</div>
				<picture className={styles.image}>
					<source srcSet="/img/business/users@1x.avif 1x, /img/business/users@2x.avif 2x" type="image/avif" />
					<source srcSet="/img/business/users@1x.webp 1x, /img/business/users@2x.webp 2x" type="image/webp" />
					<img
						loading='lazy'
						decoding='async'
						alt='Tangem hero image'
						src='/img/business/users@1x.png'
						srcSet="/img/business/users@2x.png 2x"
					/>
				</picture>
				<div className={styles.button} >
					<button type='button' onClick={toggleForm}>{ t('buttons.contact-us')}</button>
				</div>
			</div>
			<div className={styles.list}>
				<ul>
					{
						features.map(({ id, icon}, index) => (
							<li key={id} className={styles.feature}>
								<span className={styles.index}>{ index + 1 }</span>
								{icon}
								<h4>
									{ t(`sections.affiliate.features.${id}.title`)}
								</h4>
								<p>
									{t(`sections.affiliate.features.${id}.description`)}
								</p>
							</li>
						))
					}
				</ul>
			</div>
			<ModalNew isShowing={isFormShowing} hide={toggleForm} title={t('contactUs.affiliate.title')}>
				<ContactForm program='affiliate' />
			</ModalNew>
		</section>
	);
}

export default SectionAffiliate;
