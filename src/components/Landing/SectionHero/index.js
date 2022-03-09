import React from 'react'
import styles from './hero.module.scss'
import { t } from 'i18next';

import PlayIcon from '../../../../public/svg/play.svg'
import {Selected} from "../Selected";

const SectionHero = ({ toggleBuy, toggleVideo}) => {

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
	          <Selected
		          text={t('sections.safe.title') }
		          selected={t('sections.safe.selected')}
		          classes='text-secondary underline underline-offset-8 decoration-1'
	          />
          </h1>
          <p
            className='text-secondary text-xl leading-6 font-normal my-[1.875rem]
            xl:text-3xl xl:leading-9 xl:font-light xl:mt-10 xl:mb-[70px]'
          >
	          { t('sections.safe.description') }
          </p>
          <div className='flex justify-between sm:justify-start'>
            <button
              onClick={toggleBuy}
              className='flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[51.5px] py-[12px]
              text-white rounded-[18px] bg-[#141d26] hover:bg-[#06090d] transition ease-in-out duration-300
              sm:mr-4 xl:min-w-[192px] xl:text-[18px] xl:py-4 xl:px-[61.5px] w-[168px]'
            >
	            { t('buttons.buy-now') }
            </button>
            <button
              onClick={toggleVideo}
              className='flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[21px] py-[12px]
              text-primary rounded-[18px] bg-[#ecedee] hover:bg-[#dee0e1] transition ease-in-out duration-300
              xl:min-w-[192px] xl:text-[18px] xl:py-4 xl:px-[30px] w-[168px]'
            >
              <PlayIcon className='mr-3' />
	            { t('buttons.how-it-works') }
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='mt-[60px] xl:mt-0 md:justify-self-center'>
	        <picture>
		        <source srcSet="/img/hero/hero-phone@1x.avif 1x, /img/hero/hero-phone@2x.avif 2x" type="image/avif" />
		        <source srcSet="/img/hero/hero-phone@1x.webp 1x, /img/hero/hero-phone@2x.webp 2x" type="image/webp" />
	          <img
	            loading='lazy'
	            decoding='async'
	            alt='Tangem hero image'
	            src='/img/hero/hero-phone@1x.png'
	            srcSet="/img/hero/hero-phone@2x.png 2x"
	            className='w-full mx-auto max-w-[345px] xl:max-w-[630px]'
	          />
	        </picture>
        </div>

      </div>
    </section>
  )
}

export default SectionHero
