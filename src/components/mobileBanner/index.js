import React from 'react'
import classNames from 'classnames'
import styles from './mobileBanner.module.scss'

import GoogleStoreIcon from '../../../public/svg/google_store.svg'
import AppleStoreIcon from '../../../public/svg/ios_store.svg'

export const MobileBanner = () => {
  return (
    <div className={styles['banner']}>
      <div className={classNames('container', styles['banner-inner'])}>
        <div>
          <img
            src='./img/banner-mobile.png'
            alt='tangem mobile app'
            className={styles['banner-img']}
            loading='lazy'
            decoding='async'
          />
          <div className={classNames('row', styles['banner-height'])}>
            <div className='col'></div>
            <div className={classNames('col', styles['banner-center'])}>
              <div className={styles['banner-title']}>Manage your cards from mobile</div>
              <div className={styles['banner-subtitle']}>Download the app to manage your projects, keep track of the progress and complete tasks without procaastinating. Stay on track and complete on time!</div>
              <div>
                <AppleStoreIcon className={styles['banner-ios']} />
                <GoogleStoreIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
