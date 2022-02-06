import React from 'react'
import DynamicLoadable from 'next/dynamic'
import styles from './intro.module.scss'
import { Button } from '../button'

import PlayIcon from '../../../public/svg/play.svg'

const DynamicBuyButton = DynamicLoadable(() => import('../shopify/shopifyBuyButton'), {
  ssr: false,
})

export const Intro = () => {
  return (
    <div className={styles['intro']}>
      <div className="container">
        <div className="row">
          <div className='col'>
            <h1 className={styles['intro-title']}>Keep your crypto <span className={styles['intro-title-gray']}>safe</span></h1>
            <p className={styles['intro-description']}>Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card.</p>
            <div className={styles['intro-btns']}>
              <Button type='primary' href='#'>Buy now</Button>
              <Button
                type='secondary'
                href='#'
                withIcon={<PlayIcon />}
              >
                How it works
              </Button>
            </div>
          </div>
          <div className='col-5 offset-md-1'>
            <img
              src='./img/intro-img.png'
              alt='intro image'
              className={styles['intro-img']}
              loading='lazy'
              decoding='async'
            />
          </div>
        </div>
      </div>  
    </div>
  )
}
