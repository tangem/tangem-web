import React from 'react'

import SearchIcon from '../../../../public/svg/search.svg'
import {t} from "i18next";

const SectionFeature = ({ toggleSearch, toggleBuy }) => {

  return (
    <section className='max-w-[1680px] m-auto'>
      <div
        className='flex flex-col md:flex-row lg:items-center lg:mt-[100px]'
      >
        {/* Left Side */}
        <div className='order-last md:order-first md:w-5/12 mt-[37px] lg:w-1/2 lg:mt-0 xl:w-[47%]'>
          <picture>
            <source
              srcSet='/img/feature/feature-card-3x.png'
              media='(min-width: 1536px)'
            />
            <source
              srcSet='/img/feature/feature-card-2x.png'
              media='(min-width: 768px)'
            />
            <source
              srcSet='/img/feature/feature-card-1x.png'
              media='(min-width: 300px)'
            />
            <img
              loading='lazy'
              decoding='async'
              alt='Tangem card image'
              src='/img/feature/feature-card-2x.png'
              className='w-full'
            />
          </picture>
        </div>
        {/* Right Side */}
        <div className='container px-4 mx-auto mt-[6.25rem]
          md:w-1/2 md:mt-[50px] lg:w-[40%] lg:mt-0 xl:w-[44%] xl:max-w-[583px] xl:ml-[8%] xl:px-0'
        >
          <h2 className='text-[60px] leading-[54px] font-semibold text-primary
            lg:max-w-[400px] xl:max-w-full xl:text-[100px] xl:leading-[95px]'
          >
	          { t('sections.backup.title')}
          </h2>
          <p
            className='text-secondary text-xl leading-6 font-normal my-[1.875rem]
            xl:text-3xl xl:leading-9 xl:font-light xl:mt-6 xl:mb-[50px]'
          >
	          { t('sections.backup.description')}</p>
          <button
            onClick={toggleBuy}
            className='w-full sm:w-auto flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[51.5px] py-[12px]
            text-white rounded-[18px] bg-[#141d26] hover:bg-[#06090d] transition ease-in-out duration-300
            sm:mr-4 xl:min-w-[192px] xl:text-[18px] xl:py-4 xl:px-[61.5px]'
          >
	          { t('buttons.buy-now') }
          </button>
        </div>
      </div>

      <div
        className='flex flex-col mt-[100px] md:flex-row md:mt-[100px] lg:items-center'
      >

        {/* Left Side */}
        <div className='container md:w-1/2 px-4 mx-auto md:mt-[15px] md:pl-[30px] lg:w-[40%] lg:mt-0 xl:w-[43%] xl:px-0 xl:ml-[3%] 2xl:ml-[5%] 3xl:ml-[5%]'>
          <h2 className='max-w-[345px] text-[60px] leading-[54px] font-semibold text-primary
            lg:max-w-[400px] xl:max-w-[550px] xl:text-[100px] xl:leading-[95px]'
          >
	          {t('sections.currencies.title')}
          </h2>
          <p
            className='text-secondary text-xl leading-6 font-normal my-[1.875rem]
            xl:text-3xl xl:leading-9 xl:font-light xl:max-w-[550px] xl:mt-6 xl:mb-[50px]'
          >
	          { t('sections.currencies.description') }
          </p>
            <div className='max-w-[345px] xl:max-w-full flex justify-between sm:justify-start'>
            <button
              onClick={toggleBuy}
              className='w-[168px] md:w-auto flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[51.5px] py-[12px]
              text-white rounded-[18px] bg-[#141d26] hover:bg-[#06090d] transition ease-in-out duration-300
              sm:mr-4 xl:min-w-[192px] xl:text-[18px] xl:py-4 xl:px-[61.5px]'
            >
	            { t('buttons.buy-now') }
            </button>
            <button
              onClick={toggleSearch}
              className='w-[168px] md:w-auto flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[21px] py-[12px]
              text-primary rounded-[18px] bg-[#ecedee] hover:bg-[#dee0e1] transition ease-in-out duration-300
              xl:min-w-[192px] xl:text-[18px] xl:py-4 xl:px-[30px]'
            >
              <SearchIcon className='mr-3' />
	            <span className='block lg:hidden'> { t('buttons.assets-short') }</span>
	            <span className='hidden lg:block'> { t('buttons.assets') }</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 lg:w-3/5 xl:w-[55%] overflow-hidden flex justify-center md:block'>

            <img
              loading='lazy'
              decoding='async'
              alt='Tangem card image'
              src='/svg/tokens.svg'
              className='w-full ml-0 lg:ml-[12%] 3xl:ml-0 min-w-[575px] max-w-[906px]'
            />
        </div>

      </div>
    </section>
  )
}

export default SectionFeature
