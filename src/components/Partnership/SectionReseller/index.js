import React from 'react';
import * as styles from './reseller.module.scss'
import {t} from "i18next";
import PriceIcon from '../../../../public/svg/price.svg';
import PersonIcon from '../../../../public/svg/person.svg';
import MaterialsIcon from '../../../../public/svg/book-open.svg';
import DeliveryIcon from '../../../../public/svg/delivery.svg';
import ModalNew from "../../Common/Modal";
import ContactForm from "../ContactForm";
import useModal from "../../../hooks/useModal";

const SectionReseller = () => {

	const { isShowing: isFormShowing, toggle: toggleForm } = useModal('contactUsReseller');
	const features = [
		{
			id: "price",
			icon: <PriceIcon />,

		},
		{
			id: "personal",
			icon: <PersonIcon />,
		},
		{
			id: "materials",
			icon: <MaterialsIcon />
		},
		{
			id: "delivery",
			icon: <DeliveryIcon />
		}
	];

	return (
		<section className={styles.section}>
			<div className={styles.reseller}>
				<div className={styles.title}>
					<h2>{ t('sections.resellers.title')}</h2>
					<p>{ t('sections.resellers.description')}</p>
					<button type="button" onClick={toggleForm}>{ t('buttons.contact-us')}</button>
				</div>
				<picture className={styles.image}>
					<source srcSet="/img/business/cart@1x.avif 1x, /img/business/cart@2x.avif 2x" type="image/avif" />
					<img
						loading='lazy'
						decoding='async'
						alt='Tangem hero image'
						src='/img/business/cart@1x.png'
						srcSet="/img/business/cart@2x.png 2x"
					/>
				</picture>
			</div>
			<div className={styles.list}>
				<ul>
					{
						features.map(({ id, icon}) => (
							<li key={id} className={styles.feature}>
								{icon}
								<h4>
									{ t(`sections.reseller.features.${id}.title`)}
								</h4>
								<p>
									{t(`sections.reseller.features.${id}.description`)}
								</p>
							</li>
						))
					}
				</ul>
			</div>
			<ModalNew isShowing={isFormShowing} hide={toggleForm} title={t('contactUs.resellers.title')}>
				<ContactForm program='reseller' />
			</ModalNew>
		</section>
	)
}

export default SectionReseller;
