import React from 'react'
import classNames from 'classnames'
import styles from './Web3Compatible.module.scss'
import Link from 'next/link'
import { Button } from '../button'

const coins = [{
    id: 0,
    title: 'Zerion',
    imgPath: './img/web3-zerion.png'
  }, {
    id: 1,
    title: 'Rarible',
    imgPath: './img/web3-rarible.png'
  }, {
    id: 2,
    title: 'Zapper',
    imgPath: './img/web3-zerion.png'
  }, {
    id: 3,
    title: 'Uniswap',
    imgPath: './img/web3-rarible.png'
  },
]

export const Web3Compatible = () => {
  return (
    <div className={styles['web3']}>
      <div className='container'>
        <div className="row">
          <div className={styles['web3-title']}>Web 3.0 compatible</div>
          <div className={styles['web3-subtitle']}>Exchange, buy NFT’s, make loans and deposits in more than 100 different decentralized applications with help of Wallet Connect.</div>
        </div>
        <div className="row">
          <div className={classNames(styles['web3-items'], styles['web3-items-end'])}>
            {coins?.length !== 0 && coins.map(({ id, title, imgPath }) => (
              <div key={id} className={styles['web3-item']}>
                <img
                  src={imgPath}
                  alt={title}
                  className={styles['web3-img']}
                  loading='lazy'
                  decoding='async'
                />
                <span className={styles['web3-text']}>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className={classNames(styles['web3-items'], styles['web3-items-start'])}>
            {coins?.length !== 0 && coins.map(({ id, title, imgPath }) => (
              <div key={id} className={styles['web3-item']}>
                <img
                  src={imgPath}
                  alt={title}
                  className={styles['web3-img']}
                  loading='lazy'
                  decoding='async'
                />
                <span className={styles['web3-text']}>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className={classNames(styles['web3-items'], styles['web3-items-end'])}>
            {coins?.length !== 0 && coins.map(({ id, title, imgPath }) => (
              <div key={id} className={styles['web3-item']}>
                <img
                  src={imgPath}
                  alt={title}
                  className={styles['web3-img']}
                  loading='lazy'
                  decoding='async'
                />
                <span className={styles['web3-text']}>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className={classNames(styles['web3-items'], styles['web3-items-start'])}>
            {coins?.length !== 0 && coins.map(({ id, title, imgPath }) => (
              <div key={id} className={styles['web3-item']}>
                <img
                  src={imgPath}
                  alt={title}
                  className={styles['web3-img']}
                  loading='lazy'
                  decoding='async'
                />
                <span className={styles['web3-text']}>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['web3-cta']}>
          <Button type='secondary' href='#'>See all dapp</Button>
        </div>
      </div>
    </div>
  )
}
