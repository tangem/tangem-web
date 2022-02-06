import React from 'react'
import styles from './features.module.scss'

export const Features = () => {
  return (
    <div className={styles['features']}>
      <div className='container'>
        <div className="row">
          <h3 className={styles['features-title']}>Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained.</h3>
          <p className={styles['features-subtitle']}>Features you’ll like:</p>
          <div className={styles['features-items']}>
            <div className={styles['feature-item']}>
              <span className={styles['feature-title']}>Ultimate security</span>
              <img
                src='./img/feature-security.png'
                alt='Ultimate security'
                className={styles['feature-img']}
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className={styles['feature-item']}>
              <span className={styles['feature-title']}>Hands like a cash</span>
              <img
                src='./img/feature-cash.png'
                alt='Hands like a cash'
                className={styles['feature-img']}
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className={styles['feature-item']}>
              <span className={styles['feature-title']}>Exchange</span>
              <img src="./img/feature-exchange.png" alt="Exchange" className={styles['feature-img']} loading='lazy' decoding='async' />
            </div>
            <div className={styles['feature-item']}>
              <span className={styles['feature-title']}>Lorem Ipsum</span>
              <img src="./img/feature-dots.png" alt="Lorem Ipsum" className={styles['feature-img']} loading='lazy' decoding='async' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
