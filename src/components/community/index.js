import React from 'react'
import classNames from 'classnames'
import styles from './community.module.scss'

import TwitterIcon from '../../../public/svg/twitter.svg'
import FacebookIcon from '../../../public/svg/fb.svg'
import InstaIcon from '../../../public/svg/insta.svg'
import GithubIcon from '../../../public/svg/github.svg'
import YoutubeIcon from '../../../public/svg/youtube.svg'
import LinkedinIcon from '../../../public/svg/linkedin.svg'

export const Community = () => {
  return (
    <div className={styles['community']}>
      <div className={classNames('container', styles['community-container'])}>
        <div>
          <img
            src='./img/banner-community.png'
            alt='tangem community'
            className={styles['community-img']}
            loading='lazy'
            decoding='async'
          />
          <div className={classNames('row', styles['community-inner'])}>
            <div className={classNames('col', styles['community-center'])}>
              <div className={styles['community-title']}>Join the Global Community of <span>Tangem Users</span></div>
              <div className={styles['community-subtitle']}>Tangem is trusted by clients and leading market players from all around the globe today. We have established presence in 108 countries on 5 continents, except Antarctica.</div>
              <div className={styles['community-socials']}>
                <TwitterIcon className={styles['community-social']} />
                <FacebookIcon className={styles['community-social']} />
                <InstaIcon className={styles['community-social']} />
                <GithubIcon className={styles['community-social']} />
                <YoutubeIcon className={styles['community-social']} />
                <LinkedinIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
