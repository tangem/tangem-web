import React from 'react'
import Link from 'next/link'
import styles from './wallet.module.scss'
import classNames from 'classnames'
// import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

const SectionWallet = () => {
  // const [src, { blur }] = useProgressiveImg('./img/wallet/wallet-placeholder.png', './img/wallet/wallet-2x.png')

  return (
    <div className={classNames('md:container md:mx-[26px] md:px-12 xl:mx-auto xl:px-0 relative', styles['wallet'])}>
      <div className="md:absolute md:top-2/4 md:left-2/4 md:translate-y-[-50%]">
        <div className='pt-8 px-4 md:pt-4 lg:px-0 md:max-w-[370px] lg:max-w-[430px] xl:max-w-[520px]'>
          <h2 className='text-[46px] md:text-3xl xl:text-6xl font-semibold text-white leading-[46px] lg:text-left'>Manage your <span className='text-emerald-400'>wallet</span> from mobile</h2>
          <p className='text-xl md:text-lg xl:text-2xl text-neutral-400 my-[30px] lg:mb-12 lg:text-left font-light max-w-[500px]'>No wires or batteries. Just download the Tangem app to your phone and tap the card.</p>
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
    // <div className='md:container md:mx-auto md:px-12 xl:px-0'>
    //   <div className='relative'>
    //     <picture>
    //       <source media='(max-width: 767px)' srcSet='./img/wallet/wallet-1x.png' />
    //       <source media='(min-width: 768px)' srcSet='./img/wallet/wallet-2x.png' />
    //       <img
    //         src={src}
    //         alt='Tangem Wallet App image'
    //         loading='lazy'
    //         decoding='async'
    //         style={{
    //           width: '1280px',
    //           filter: blur ? 'blur(20px)' : 'none',
    //           transition: blur ? 'none' : 'filter 0.3s ease-out',
    //         }}
    //         className='max-h-[674px] xs:max-h-[420px] object-cover'
    //       />
    //     </picture>
    //     <div className="xs:w-full xs:max-w-[450px] absolute top-0 left-0 xs:left-2/4 xs:translate-x-[-50%] md:left-2/4 md:translate-x-[0%] lg:top-2/4 lg:translate-y-[-50%]">
    //       <div className='pt-8 px-4 md:pt-4 lg:px-0 w-full max-w-lg'>
    //         <h2 className='text-[46px] md:text-3xl xl:text-6xl font-semibold text-white leading-[46px] xs:text-center lg:text-left'>Manage your <span className='text-emerald-400'>wallet</span> from mobile</h2>
    //         <p className='text-xl xl:text-2xl text-neutral-400 my-[30px] lg:mb-12 xs:text-center lg:text-left'>No wires or batteries. Just download the Tangem app to your phone and tap the card.</p>
    //         <div className='flex justify-between xs:justify-center lg:justify-start'>
    //           <Link href="https://apps.apple.com/ru/app/tangem/id1354868448?l=en">
    //             <a> 
    //               <img src='./img/wallet/icon-apple.png' alt='Tangem Mobile App image' className='w-[166px] xs:w-[172px] mr-5 lg:mr-7' loading='lazy' decoding='async' />
    //             </a>
    //           </Link>
    //           <Link href="https://play.google.com/store/apps/details?id=com.tangem.wallet&hl=en&gl=US">
    //             <a>
    //               <img src='./img/wallet/icon-google.png' alt='Tangem Mobile App image' className='w-[166px] xs:w-[172px]' loading='lazy' decoding='async' />
    //             </a>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SectionWallet
