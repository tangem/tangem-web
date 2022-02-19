import React from 'react'
import Link from 'next/link'
import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

const SectionWaller = () => {
  const [src, { blur }] = useProgressiveImg('./img/wallet/wallet-placeholder.png', './img/wallet/wallet-2x.png')

  return (
    <div className='container mx-auto md:px-12 xl:px-0'>
      <div className='relative'>
        <picture>
          <source media='(max-width: 767px)' srcSet='./img/wallet/wallet-1x.png' />
          <source media='(min-width: 768px)' srcSet='./img/wallet/wallet-2x.png' />
          <img
            src={src}
            alt='Tangem Wallet App image'
            loading='lazy'
            decoding='async'
            style={{
              width: '1280px',
              filter: blur ? 'blur(20px)' : 'none',
              transition: blur ? 'none' : 'filter 0.3s ease-out',
            }}
          />
        </picture>
        <div className="absolute top-0 left-0 md:left-2/4 lg:top-2/4 lg:translate-y-[-50%]">
          <div className='pt-8 px-4 md:pt-4 lg:px-0 w-full max-w-lg'>
            <h2 className='text-5xl md:text-3xl xl:text-6xl font-semibold text-white'>Manage your <span className='text-emerald-400'>wallet</span> from mobile</h2>
            <p className='text-xl xl:text-2xl text-neutral-400 my-7 lg:mb-12'>No wires or batteries. Just download the Tangem app to your phone and tap the card.</p>
            <div className='flex justify-between lg:justify-start'>
              <Link href="https://apps.apple.com/ru/app/tangem/id1354868448?l=en">
                <a>
                  <img src='./img/wallet/icon-apple.png' alt='Tangem Mobile App image' className='w-36 lg:mr-7' loading='lazy' decoding='async' />
                </a>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.tangem.wallet&hl=en&gl=US">
                <a>
                  <img src='./img/wallet/icon-google.png' alt='Tangem Mobile App image' className='w-36' loading='lazy' decoding='async' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWaller
