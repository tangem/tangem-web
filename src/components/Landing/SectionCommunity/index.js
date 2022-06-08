import React from 'react'
import classNames from 'classnames'
import styles from './community.module.scss'
import { Selected } from "../Selected";
import { t } from "i18next";

const SectionCommunity = () => {

  return (
    <section className={styles.community}>
      <div className={styles.title}>
        <h3>{ t('sections.community.title') }</h3>
        <p>
	        {t('sections.community.description')}
				</p>
      </div>
      <div className={styles.socials}>
        <a href={t('socials.telegram')} target="_blank" rel="noopener noreferrer">
	        <img src='/svg/telegram.svg' alt='telegram' loading='lazy' />
        </a>
        <a href="https://twitter.com/tangem" target="_blank" rel="noopener noreferrer">
          <img src='/svg/twitter.svg' alt='twitter' loading='lazy' />
        </a>
        <a href="https://m.facebook.com/TangemCards/" target="_blank" rel="noopener noreferrer">
          <img src='/svg/facebook.svg' alt='facebook' loading='lazy' />
        </a>
        <a href="https://instagram.com/tangemcards" target="_blank" rel="noopener noreferrer">
          <img src='/svg/instagram.svg' alt='instagram' loading='lazy' />
        </a>
        <a href="https://github.com/tangem" target="_blank" rel="noopener noreferrer">
          <img src='/svg/github.svg' alt='github' loading='lazy' />
        </a>
        <a href="https://youtube.com/channel/UCFGwLS7yggzVkP6ozte0m1w" target="_blank" rel="noopener noreferrer">
          <img src='/svg/youtube.svg' alt='youtube' loading='lazy' />
        </a>
        <a href="https://www.linkedin.com/company/tangem" target="_blank" rel="noopener noreferrer">
          <img src='/svg/linkedin.svg' alt='linkedin' loading='lazy' />
        </a>
      </div>
    </section>
  )
}

export default SectionCommunity
