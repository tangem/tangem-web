import React from "react";
import {t} from "i18next";
import DeliveryIcon from "../../../../public/svg/delivery-buy.svg";
import ReturnIcon from "../../../../public/svg/return.svg";
import SupportIcon from "../../../../public/svg/support.svg";
import * as styles from './pricing.module.scss';

const Features = () => {
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

	return (
		<div className={styles.props}>
			{features.map(({id, icon, text}) => (
				<div key={id} className={styles.prop}>
					{icon}
					<p>{text}</p>
				</div>
			))}
		</div>
	)

}
export default Features;
