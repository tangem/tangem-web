import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './hero.module.scss'
import BuyModal from '../../modal/BuyModal'
import YoutubeModal from '../../modal/YoutubeModal'
import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

import PlayIcon from '../../../../public/svg/play.svg'

const SectionHero = () => {
  const [src, { blur }] = useProgressiveImg('./img/hero/hero-placeholder.png', './img/hero/hero-phone-2x.png')

  const [youtubeModal, setYoutubeModal] = useState(false)
  const [buyModal, setBuyModal] = useState(false)

  const handleVideoModal = () => {
    setYoutubeModal(!youtubeModal)
  }

  const handleBuyModal = () => {
    setBuyModal(!buyModal)
  }

  return (
    <>
      {buyModal && (
        <BuyModal buyModal={buyModal} handleBuyModal={handleBuyModal} />
      )}
      {youtubeModal && (
        <YoutubeModal youtubeModal={youtubeModal} handleVideoModal={handleVideoModal} />
      )}
      <div className={classNames('py-3.5', styles['hero'])}>
        <div className='container flex flex-wrap px-4 mx-auto md:flex-nowrap mt-14 lg:px-0'>
          <div className='lg:mt-7 md:pl-8 md:pr-8 xl:pr-0 xl:pl-0 max-w-580px w-full'>
            <h1 className='text-6xl font-semibold xl:text-120px leading-85'>
              Keep your crypto <span className='text-gray-400'>safe</span>
            </h1>
            <p className='text-xl font-normal text-neutral-400 xl:text-3xl my-7 lg:mt-10 lg:mb-16'>
              Tangem Wallet lets you store your crypto assets secure and easily
              accessible while keeping private keys contained in your card.
            </p>
            <div className='flex'>
              <a
                className='w-3/6 lg:w-32 flex cursor-pointer justify-center text-base lg:text-lg font-semibold text-white 
                bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px mr-2 lg:mr-4'
                data-element='product.button'
                onClick={handleBuyModal}
              >
                Buy now
              </a>
              <button
                onClick={handleVideoModal}
                className='w-3/6 lg:w-48 flex justify-center items-center text-base lg:text-lg font-semibold text-neutral-900 
                bg-[#ecedee] hover:bg-[#DEE0E1] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px'
              >
                <PlayIcon className='mr-3' />
                How it works
              </button>
            </div>
          </div>
          <div className='mt-14 md:mt-0 lg:ml-[8rem]'>
            <picture>
              <source media='(max-width: 768px)' srcSet='./img/hero/hero-phone-1x.png' />
              <source media='(min-width: 769px)' srcSet='./img/hero/hero-phone-2x.png' />
              <img
                src={src}
                alt='Tangem Hero image'
                loading='lazy'
                decoding='async'
                style={{
                  width: '577px',
                  filter: blur ? 'blur(20px)' : 'none',
                  transition: blur ? 'none' : 'filter 0.3s ease-out',
                }}
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionHero