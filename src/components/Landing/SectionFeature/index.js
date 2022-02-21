import React, { useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './feature.module.scss'
import { useProgressiveImg } from '../../../hooks/useProgressiveImage'
import BuyModal from '../../modal/BuyModal'
import SearchModal from '../../modal/SearchModal'

import SearchIcon from '../../../../public/svg/search.svg'
import { Router } from 'next/router'


const SectionFeature = () => {

  const router = useRouter()

  const [cardImg, { blur: cardImgBlur }] = useProgressiveImg('./img/feature/feature-card-placeholder.png', './img/feature/feature-card-2x.png')
  const [cryptoImg, { blur: cryptoImgblur }] = useProgressiveImg('./img/feature/feature-crypto-placeholder.png', './img/feature/feature-crypto-2x.png')

  const [buyModal, setBuyModal] = useState(false)
  const [searchModal, setSearchModal] = useState(false)

  const handleBuyModal = () => {
    setBuyModal(!buyModal)
  }

  return (
    <>
    {buyModal && (
      <BuyModal buyModal={buyModal} handleBuyModal={handleBuyModal} />
    )}
    {searchModal && <SearchModal searchModal={searchModal} setSearchModal={() => setSearchModal(!searchModal)} />}
    <div className={classNames('mt-16 mb-28 xl:mt-0 xl:mb-32', styles['feature'])}>
      <div className="flex flex-wrap md:flex-nowrap justify-between lg:justify-start mx-auto">
        <div className='md:order-last px-4 md:px-12 lg:pl-0 lg:ml-36 md:flex md:flex-col md:justify-center max-w-2xl'>
          <h2 className='text-6xl xl:text-8xl font-semibold leading-95'>Ultra secure backup</h2>
          <p className='lg:w-full lg:max-w-2xl text-xl xl:text-3xl text-neutral-400 my-7 md:mt-6 md:mb-12'>You can connect up to three cards to one wallet, so you'll always have a way to use wallet if your main card is lost, stolen, or damaged.</p>
          <div className='flex'>
            <a onClick={handleBuyModal} className='cursor-pointer w-full lg:w-32 flex justify-center text-[17px] lg:text-lg font-medium text-white bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 py-3 rounded-20px'>Buy now</a>
            {/* <Link href='#'>
              <a className='w-3/6 lg:w-48 flex justify-center text-[17px] lg:text-lg font-medium text-neutral-900 bg-[#ecedee] hover:bg-[#DEE0E1] transition ease-in-out duration-300 py-3 rounded-20px'>Learn more</a>
            </Link> */}
          </div>
        </div>
        <div className='w-full lg:w-auto mx-auto mt-7 md:mt-0 lg:mx-0 max-w-[696px]'>
          <picture>
            <source media='(max-width: 768px)' srcSet='./img/feature/feature-card-2x.png' />
            <source media='(min-width: 769px)' srcSet='./img/feature/feature-card-2x.png' />
            <source media='(min-width: 1800px)' srcSet='./img/feature/feature-card-3x.png' />
            <img
              src={cardImg}
              alt='Tangem Card image'
              className='w-full'
              loading='lazy'
              decoding='async'
              style={{
                width: '799px',
                filter: cardImgBlur ? 'blur(20px)' : 'none',
                transition: cardImgBlur ? 'none' : 'filter 0.3s ease-out',
              }}
            />
          </picture>
        </div>
      </div>
    </div>
    <div className='mb-4 xl:mb-32'>
      <div className="flex flex-wrap md:flex-nowrap justify-between lg:justify-start mx-auto">
        <div className='px-4 md:px-12 lg:pl-0 lg:ml-28 md:flex md:flex-col md:justify-center max-w-2xl'>
          <h2 className='text-6xl xl:text-8xl font-semibold leading-95'>Thousands of currencies</h2>
          <p className='lg:w-full lg:max-w-2xl text-xl xl:text-3xl text-neutral-400 my-7 md:mt-6 md:mb-12'>A hardware wallet for your Bitcoin, Ethereum and many more currencies simultaneously – all in one card.</p>
          <div className='flex'>
            <a onClick={handleBuyModal} className='cursor-pointer w-3/6 lg:w-32 flex justify-center text-[17px] lg:text-lg font-medium text-white bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px mr-2 lg:mr-4'>Buy now</a>
            <button onClick={() => router.push('/search')} className='w-3/6 lg:w-48 flex justify-center items-center text-[17px] lg:text-lg font-medium text-neutral-900 bg-[#ecedee] hover:bg-[#DEE0E1] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px'>
              <SearchIcon className='mr-3' />
              Search
            </button>
          </div>
        </div>
        <div className='md:order-last w-full lg:w-auto mx-auto mt-7 md:mt-0 lg:mx-0'>
          <picture>
            <source media='(max-width: 768px)' srcSet='./img/feature/feature-crypto-1x.png' />
            <source media='(min-width: 769px)' srcSet='./img/feature/feature-crypto-2x.png' />
            <source media='(min-width: 1800px)' srcSet='./img/feature/feature-crypto-3x.png' />
            <img
              src={cryptoImg}
              alt='Tangem Card image'
              className='w-full'
              style={{
                width: '799px',
                filter: cryptoImgblur ? 'blur(20px)' : 'none',
                transition: cryptoImgblur ? 'none' : 'filter 0.3s ease-out',
              }}
            />
          </picture>
        </div>
      </div>
    </div>
    </>
  )
}

export default SectionFeature
