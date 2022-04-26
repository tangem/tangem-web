import React from 'react'
import Link from 'next/link'
import styles from './wallet.module.scss'
import classNames from 'classnames'
import {Selected} from "../Selected";
import {t} from "i18next";
// import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

const SectionWallet = () => {
  // const [src, { blur }] = useProgressiveImg('/img/wallet/wallet-placeholder.png', '/img/wallet/wallet-2x.png')

  return (
    <div className={classNames('md:container mx-auto md:px-12  xl:px-0 relative', styles['wallet'])}>
      <div className="md:absolute md:top-2/4 md:left-2/4 md:translate-y-[-50%] lg:translate-y-[-50%]">
        <div className='pt-8 px-4 md:pt-0 lg:xl-4 lg:px-0 md:max-w-[370px] lg:max-w-[430px] xl:max-w-[548px]'>
          <h2 className='text-[46px] md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[46px] lg:text-left'>
	          <Selected
		          classes='text-emerald-400'
		          text={t('sections.mobile.title')}
		          selected={t('sections.mobile.selected')}
	          />
					</h2>
          <p className='leading-5 md:leading-6 text-xl md:text-lg xl:text-2xl text-neutral-400 md:my-4 my-[30px] lg:mb-12 lg:text-left font-light max-w-[500px]'>
	          { t('sections.mobile.description') }
					</p>
          <div className='flex'>
            <Link href="https://apps.apple.com/ru/app/tangem/id1354868448?l=en">
              <a className='mr-2 lg:mr-4'>
                <img src='/img/wallet/icon-apple.png' alt='Tangem Mobile App image' className='w-[166px] md:w-[130px] xl:w-[172px]' loading='lazy' decoding='async' />
              </a>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.tangem.wallet&hl=en&gl=US">
              <a className='mr-2 lg:mr-4'>
                <img src='/img/wallet/icon-google.png' alt='Tangem Mobile App image' className='w-[166px] md:w-[130px] xl:w-[172px]' loading='lazy' decoding='async' />
              </a>
            </Link>
	          <Link href="https://github.com/tangem/tangem-binaries/raw/master/app-release.apk">
		          <a>
			          <img src='/img/wallet/icon-android-apk.png' alt='Tangem Mobile App image' className='w-[166px] md:w-[130px] xl:w-[172px]' loading='lazy' decoding='async' />
		          </a>
	          </Link>
          </div>
	        <div className='sm:leading-6 text-base xl:text-xl text-[#A6AAAD] xl:mt-16 mt-2 font-normal'>
		        <span>{ t('sections.mobile.on-github') }</span>
		        <img width="24" height="24" src='/svg/github-svgrepo-com.svg' alt='GitHub' className='mx-2 inline align-text-bottom'/>
		        <span className='text-white'>GitHub</span>
					</div>
        </div>
      </div>
    </div>
  )
}

export default SectionWallet
