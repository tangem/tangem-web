import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './hero.module.scss'
import { useProgressiveImg } from '../../../hooks/useProgressiveImage'

import PlayIcon from '../../../../public/svg/play.svg'

const SectionHero = () => {
  const router = useRouter()
  const [src, { blur }] = useProgressiveImg('./img/hero/hero-placeholder.png', './img/hero/hero-phone-2x.png')

  return (
    <div className={classNames('py-3.5', styles['hero'])}>
      <div className='container flex flex-wrap px-4 mx-auto md:flex-nowrap mt-14 lg:mt-[70px] lg:px-0'>
        <div className='lg:mt-[70px] md:pl-8 md:pr-8 xl:pr-0 xl:pl-0 max-w-[595px] w-full'>
          <h1 className='text-[#090E13] text-6xl font-semibold lg:text-[6rem] xl:text-[6.5rem] 2xl:text-120px leading-85'>
            Keep your crypto <span className='text-[#A6AAAD] underline decoration-1 underline-offset-8'>safe</span>
          </h1>
          <p className='text-xl font-light text-[#A6AAAD] xl:text-3xl my-[30px] lg:mt-10 lg:mb-16 xl:mb-[72px]'>
            Tangem Wallet lets you store your crypto assets secure and easily
            accessible while keeping private keys contained in your card.
          </p>
          <div className='flex'>
            <button
              className='w-3/6 lg:w-32 flex cursor-pointer justify-center text-[17px] lg:text-lg font-medium text-white 
              bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px mr-2 lg:mr-4'
              data-element='product.button'
              onClick={() => router.push('/pricing')}
            >
              Buy now
            </button>
            <button
              onClick={() => router.push('/video')}
              className='w-3/6 lg:w-48 flex justify-center items-center text-base lg:text-lg font-medium text-neutral-900 
              bg-[#ecedee] hover:bg-[#DEE0E1] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px'
            >
              <PlayIcon className='mr-3' />
              How it works
            </button>
          </div>
        </div>
        <div className='mt-14 md:mt-0 lg:ml-[160px]'>
          <picture>
            <source media='(max-width: 768px)' srcSet='./img/hero/hero-phone-1x.png' />
            <source media='(min-width: 769px)' srcSet='./img/hero/hero-phone-2x.png' />
            <img
              src={src}
              alt='Tangem Hero image'
              loading='lazy'
              decoding='async'
              style={{
                width: '100%',
                filter: blur ? 'blur(20px)' : 'none',
                transition: blur ? 'none' : 'filter 0.3s ease-out',
              }}
              className='max-w-[630px]'
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default SectionHero
