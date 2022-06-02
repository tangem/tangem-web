import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../../../../public/svg/tangem-logo.svg'
import i18next from 'i18next';
import styles from './header.module.scss'
import classNames from 'classnames'

const Header = ({isDark}) => {
	const { language } = i18next;

	const router = useRouter();

	const links = [
		{ name: 'Personal', slug: '', href: `/${language}/`},
		{ name: 'Business', slug: 'business', href: `/${language}/business/`},
		{ name: 'Developers', slug: 'developers', href: 'https://developers.tangem.com'},
	]

  return (
    <header
      className={classNames(styles.header, isDark ? styles.dark : styles.light)}>
      <nav
        className='container mx-auto flex justify-between md:justify-start items-center h-[47px] px-4
        md:h-[70px] xl:px-2'
      >
        <Link href="/">
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>
				<div className={styles.menu}>
		      <input id="toggle" type="checkbox"/>
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
    </header>
  )
}

export default Header
