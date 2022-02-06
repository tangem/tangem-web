import React from 'react'
import Link from 'next/link'
import styles from './intro.module.scss'
import { Button } from '../button'

import PlayIcon from '../../../public/svg/play.svg'

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
              {/* <Link href="#">
                <div className={styles['intro-btn']}>
                  <PlayIcon />
                  <a className={styles['intro-how-it-works']}>How it works</a>
                </div>
              </Link> */}
            </div>
          </div>
          <div className='col-5 offset-md-1'>
            <img src='./img/intro-img.png' alt="intro image" className={styles['intro-img']}/>
          </div>
        </div>
      </div>  
    </div>
  )
}
