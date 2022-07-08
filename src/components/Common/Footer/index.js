import React from 'react';
import styles from './footer.module.scss';
import dynamic from 'next/dynamic';
import Logo from '../../../../public/svg/tangem-logo.svg';
import {t} from "i18next";
import classNames from "classnames";

const DynamicZendesk = dynamic(
	() => import('../Zendesk'),
	{ ssr: false }
)

const Footer = () => {

  return (
    <footer className={styles.footer}>
	    <div className={styles.grid}>
		    <div className={styles.logo}>
			    <Logo />
		    </div>
		    <div className={styles.address}>
			    Global Headquarters, Tangem AG, Baarerstrasse 10, 6300 Zug, Switzerland
		    </div>
		    <div className={classNames(styles.customer, styles.list)}>
			    <div className={styles.head}>{t('menu.customerPart')}</div>
			    <div>{t('menu.termsOfUse')}</div>
			    <div>{t('menu.privacyPolicy')}</div>
		    </div>
		    <div className={classNames(styles.company, styles.list)}>
			    <div className={styles.head}>{t('menu.companyPart')}</div>
			    <div>{t('menu.company')}</div>
			    <div>{t('menu.partnership')}</div>
		    </div>
		    <div className={styles.socials}>
			    <a href={t('socials.telegram')} target="_blank" rel="nofollow noopener noreferrer">
				    <img src='/svg/telegram.svg' alt='telegram' loading='lazy' />
			    </a>
			    <a href="https://twitter.com/tangem" target="_blank" rel="nofollow noopener noreferrer">
				    <img src='/svg/twitter.svg' alt='twitter' loading='lazy' />
			    </a>
			    <a href="https://m.facebook.com/TangemCards/" target="_blank" rel="nofollow noopener noreferrer">
				    <img src='/svg/facebook.svg' alt='facebook' loading='lazy' />
			    </a>
			    <a href="https://instagram.com/tangemcards" target="_blank" rel="nofollow noopener noreferrer">
				    <img src='/svg/instagram.svg' alt='instagram' loading='lazy' />
			    </a>
			    <a href="https://github.com/tangem" target="_blank" rel="nofollow noopener noreferrer">
				    <img src='/svg/github.svg' alt='github' loading='lazy' />
			    </a>
			    <a href="https://youtube.com/channel/UCFGwLS7yggzVkP6ozte0m1w" target="_blank" rel="nofollow noopener noreferrer">
				    <img src='/svg/youtube.svg' alt='youtube' loading='lazy' />
			    </a>
			    <a href="https://www.linkedin.com/company/tangem" target="_blank" rel="nofollow noopener noreferrer">
				    <img src='/svg/linkedin.svg' alt='linkedin' loading='lazy' />
			    </a>
		    </div>
	    </div>
	    <div className={styles.copyright}>
		    Copyright © {(new Date()).getFullYear()} Tangem AG. All Rights Reserved
	    </div>
	    <span className={styles.made}>
		    From Switzerland
	    </span>
	    <DynamicZendesk />
    </footer>
  )
}

export default Footer
