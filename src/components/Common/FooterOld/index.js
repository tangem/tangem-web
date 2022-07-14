import React from 'react'
import styles from './footer-old.module.scss'
import dynamic from 'next/dynamic'

const DynamicZendesk = dynamic(
	() => import('../Zendesk'),
	{ ssr: false }
)

const FooterOld = () => {

	return (
		<footer className={styles.footer}>
	    <span className={styles.madeIn}>
		    From Switzerland
	    </span>
			<div className={styles.copyright}>
				Copyright © {(new Date()).getFullYear()} Tangem. All Rights Reserved.{"\n"}
				Global Headquarters, Tangem AG, Baarerstrasse 10, 6300 Zug, Switzerland
			</div>
			<DynamicZendesk />
		</footer>
	)
}

export default FooterOld;
