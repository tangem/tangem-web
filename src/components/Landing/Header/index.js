import React from 'react'
import Link from 'next/link'

import Logo from '../../../../public/svg/tangem-logo.svg'
import i18next from 'i18next';
import styles from './header.module.scss'

const Header = () => {
	const { language } = i18next;

  return (
    <header
      className='sticky top-0 z-50 bg-foreground border-b-[1px] border-[rgba(0, 0, 0, 0.05)]'>
      <nav
        className='container mx-auto flex justify-between md:justify-start items-center h-[47px] px-4
        md:h-[70px] xl:px-2'
      >
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
	      { language === 'en' && (
					<div className={styles.menu}>
			      <input id="toggle" type="checkbox"/>
			      <label htmlFor="toggle">
				      <span/>
			      </label>
			      <ul>
				      <li className={styles.active}>Personal</li>
				      <li><a href="https://business.tangem.com">Business</a></li>
				      <li><a href="https://developers.tangem.com">Developers</a></li>
			      </ul>
		      </div>
		      )
				}
      </nav>
    </header>
  )
}

export default Header
