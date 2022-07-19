import React from 'react';
import styles from './footer-new.module.scss';
import dynamic from 'next/dynamic';
import Logo from '../../../../public/svg/tangem-logo.svg';
import i18next, {t} from "i18next";
import classNames from "classnames";
import Link from "next/link";
import {getLanguage} from "../../../lib/lang";

const DynamicZendesk = dynamic(
	() => import('../Zendesk'),
	{ ssr: false }
)

const Footer = () => {
	const { language } = i18next;
	const lang = getLanguage(language);

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
			    <span className={styles.head}>{t('menu.legalPart')}</span>
			    <a target="_blank" href="/docs/en/Terms_of_Use_2022-07-01.pdf">{t('menu.termsOfUse')}</a>
			    <a target="_blank" href="/docs/en/Privacy_policy_2022-06-27.pdf">{t('menu.privacyPolicy')}</a>
		    </div>
		    <div className={classNames(styles.company, styles.list)}>
			    <span className={styles.head}>{t('menu.companyPart')}</span>

			    <Link href={`/${lang}/company/`}>
				    <a>{t('menu.about')}</a>
			    </Link>
			    <Link href={`/${lang}/partnership/`}>
				    <a>{t('menu.partnership')}</a>
			    </Link>
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
