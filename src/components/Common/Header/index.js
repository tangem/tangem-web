import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../../../../public/svg/tangem-logo.svg'
import i18next, {t} from "i18next";
import styles from './header.module.scss'
import classNames from 'classnames'
import Button from "../Button";

const Header = ({isDark, toggleBuy}) => {
	const { language } = i18next;

	const router = useRouter();

	const links = [
		{ name: t('menu.wallet'), slug: '', href: `/${language}/`},
		{ name: t('menu.partnership'), slug: 'partnership', href: `/${language}/partnership/` },
		...(language !== 'ru' ? [{ name: t('menu.developers'), slug: 'developers', href: 'https://developers.tangem.com'}]: []),
	]

  return (
    <header
      className={classNames(styles.header, isDark ? styles.dark : styles.light)}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>
				<div className={styles.menu}>
		      <input id="toggle" type="checkbox" className={styles.toggle} />
		      <label htmlFor="toggle">
			      <span/>
		      </label>
		      <ul>
			      { links.map(({name, href, slug}) => {
							const [slugFromRouter = ''] = router.asPath.split('/').filter(i => !!i & i !== language).reverse();
							return (
					      <li key={name} className={slugFromRouter === slug ? styles.active : null} >
						      { router.asPath !== href && (
							      <Link href={href}>
								      <a>{name}</a>
							      </Link>
						        ) ||
							      (
								      <span>{name}</span>
							      )
						      }
					      </li>
				      )
			      }) }
		      </ul>
	      </div>
      </nav>
	    <Button theme={isDark ? 'dark' : 'light'} size='small' className={styles.buy} onClick={toggleBuy}>{ t('buttons.buy') }</Button>
    </header>
  )
}

export default Header
