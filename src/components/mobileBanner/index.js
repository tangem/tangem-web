import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './mobileBanner.module.scss'

import GoogleStoreIcon from '../../../public/svg/google_store.svg'
import AppleStoreIcon from '../../../public/svg/ios_store.svg'

export const MobileBanner = () => {
  return (
    <div className='container mx-auto md:px-12 xl:px-0'>
      <div className='relative'>
        <picture>
          <source media='(max-width: 767px)' srcSet='./img/mobilebanner/mobile-banner-1x.png' />
          <source media='(min-width: 768px)' srcSet='./img/mobilebanner/mobile-banner-2x.png' />
          <img src='./img/mobilebanner/mobile-banner-2x.png' alt='Tangem Mobile App image' loading='lazy' decoding='async' />
        </picture>
        <div className="absolute top-0 left-0 md:left-2/4 lg:top-2/4 lg:translate-y-[-50%]">
          <div className='pt-8 px-4 md:pt-4 lg:px-0 w-full max-w-lg'>
            <h2 className='text-5xl md:text-3xl xl:text-6xl font-semibold text-white'>Manage your <span className='text-emerald-400'>wallet</span> from mobile</h2>
            <p className='text-xl xl:text-2xl text-neutral-400 my-7 lg:mb-12'>No wires or batteries. Just download the Tangem app to your phone and tap the card.</p>
            <div className='flex justify-between lg:justify-start'>
              <Link href="#">
                <a>
                  <img src='./img/mobilebanner/icon-apple.png' alt='Tangem Mobile App image' className='w-36 lg:mr-7' loading='lazy' decoding='async' />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <img src='./img/mobilebanner/icon-google.png' alt='Tangem Mobile App image' className='w-36' loading='lazy' decoding='async' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
