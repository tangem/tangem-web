import React from 'react'
import { useRouter } from 'next/router'
import styles from './hero.module.scss'

import PlayIcon from '../../../../public/svg/play.svg'

const SectionHero = () => {
  const router = useRouter()

  return (
    <section className={styles['hero']}>

      <div className='container mx-auto grid grid-cols-1 content-center px-4 mt-[50px]
        md:grid-cols-2 md:gap-x-[1rem] lg:gap-x-[6rem] xl:gap-x-[8rem] 2xl:gap-x-[10rem] xl:px-0 xl:mt-[5.625rem]'
      >
        {/* Left Side */}
        <div className='self-center max-w-[343px] sm:max-w-full lg:max-w-[595px] lg:self-start lg:mt-[72px]'>
          <h1
            className='text-[60px] leading-[54px] font-semibold text-primary
            lg:max-w-[400px] xl:max-w-full xl:text-[120px] xl:leading-[102px]'
          >
            Keep your crypto <span className='text-secondary underline underline-offset-8 decoration-1'>safe</span>
          </h1>
          <p
            className='text-secondary text-xl leading-6 font-normal my-[1.875rem]
            xl:text-3xl xl:leading-9 xl:font-light xl:mt-10 xl:mb-[70px]'
          >
            Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card.
          </p>
          <div className='flex justify-between sm:justify-start'>
            <button
              onClick={() => router.push('/pricing')}
              className='flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[51.5px] py-[12px]
              text-white rounded-[18px] bg-[#141d26] hover:bg-[#06090d] transition ease-in-out duration-300
              sm:mr-4 xl:w-[192px] xl:text-[18px] xl:py-4 xl:px-[61.5px]'
            >
              Buy now
            </button>
            <button
              onClick={() => router.push('/video')}
              className='flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[21px] py-[12px]
              text-primary rounded-[18px] bg-[#ecedee] hover:bg-[#dee0e1] transition ease-in-out duration-300
              xl:w-[192px] xl:text-[18px] xl:py-4 xl:px-[30px]'
            >
              <PlayIcon className='mr-3' />
              How it works
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='mt-[60px] xl:mt-0 md:justify-self-center'>
          <img
            loading='lazy'
            decoding='async'
            alt='Tangem hero image'
            src='./img/hero/hero-phone-2x.png'
            srcSet='
            ./img/hero/hero-phone-1x.png 1x,
            ./img/hero/hero-phone-2x.png 2x,'
            className='w-full mx-auto max-w-[345px] xl:max-w-[630px]'
          />
        </div>

      </div>
    </section>
  )
}

export default SectionHero
