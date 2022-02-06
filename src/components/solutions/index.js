import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './solutions.module.scss'
import { Button } from '../button'

import SearchIcon from '../../../public/svg/search.svg'

export const Solutions = () => {
  return (
    <>
      <div className={styles['solutions']} style={{ marginBottom: '85px' }}>
        <div className="container">
          <div className={classNames('row', styles['solutions-height'])}>
            <div className="col">
              <div className={classNames(styles['solutions-img'], styles['solutions-img--left'])}>
                <img
                  src='./img/cards.png'
                  alt='tangem cards'
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </div>
            <div className="col">
              <div className={styles['solutions-content']}>
                <div className={styles['solutions-title']}>Ultra secure backup</div>
                <div className={styles['solutions-subtitle']}>You can connect up to three cards to one wallet, so you'll always have a way to use wallet if your main card is lost, stolen, or damaged.</div>
                <div className={styles['solutions-btns']}>
                  <Button type='primary' href='#'>Buy now</Button>
                  <Button type='secondary' href='#'>Learn more</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['solutions']} style={{ marginBottom: '220px' }}>
        <div className="container">
          <div className={classNames('row', styles['solutions-height'])}>
            <div className="col">
              <div className={styles['solutions-content--secondary']}>
                <div className={styles['solutions-title']}>Thousands  <br /> of currencies</div>
                <div className={styles['solutions-subtitle']}>A multicurrency hardware wallet to manage various crypto with access to DeFi, NFT, DeEx and more - all in one card.</div>
                <div className={styles['solutions-btns']}>
                  <Button type='primary' href='#'>Buy now</Button>
                  <Button
                    type='secondary'
                    href='#'
                    withIcon={<SearchIcon />}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={classNames(styles['solutions-img'], styles['solutions-img--right'])}>
                <img
                  src='./img/cryptos.png'
                  alt='tangem cryptos'
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
