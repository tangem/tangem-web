import React from 'react'
import Link from 'next/link'
import styles from './wallet.module.scss'
import classNames from 'classnames'
import {Selected} from "../Selected";
import {t} from "i18next";
// import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

const SectionWallet = () => {
  // const [src, { blur }] = useProgressiveImg('./img/wallet/wallet-placeholder.png', './img/wallet/wallet-2x.png')

  return (
    <div className={classNames('md:container mx-auto md:px-12  xl:px-0 relative', styles['wallet'])}>
      <div className="md:absolute md:top-2/4 md:left-2/4 md:translate-y-[-50%]">
        <div className='pt-8 px-4 md:pt-4 lg:px-0 md:max-w-[370px] lg:max-w-[430px] xl:max-w-[520px]'>
          <h2 className='text-[46px] md:text-3xl xl:text-6xl font-semibold text-white leading-[46px] lg:text-left'>
	          <Selected
		          classes='text-emerald-400'
		          text={t('sections.mobile.title')}
		          selected={t('sections.mobile.selected')}
	          />
					</h2>
          <p className='text-xl md:text-lg xl:text-2xl text-neutral-400 my-[30px] lg:mb-12 lg:text-left font-light max-w-[500px]'>
	          { t('sections.mobile.description') }
					</p>
          <div className='flex'>
            <Link href="https://apps.apple.com/ru/app/tangem/id1354868448?l=en">
              <a>
                <img src='./img/wallet/icon-apple.png' alt='Tangem Mobile App image' className='w-[166px] md:w-[130px] xs:w-[172px] mr-5 lg:mr-7' loading='lazy' decoding='async' />
              </a>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.tangem.wallet&hl=en&gl=US">
              <a>
                <img src='./img/wallet/icon-google.png' alt='Tangem Mobile App image' className='w-[166px] md:w-[130px] xs:w-[172px]' loading='lazy' decoding='async' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWallet
