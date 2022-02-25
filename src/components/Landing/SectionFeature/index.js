import React from 'react'
import { useRouter } from 'next/router'
import styles from './feature.module.scss'

import SearchIcon from '../../../../public/svg/search.svg'

const SectionFeature = () => {

  const router = useRouter()

  return (
    <section>
      <div
        className='flex flex-col md:flex-row lg:items-center lg:mt-[100px]'
      >
        {/* Left Side */}
        <div className='order-last md:order-first md:w-5/12 mt-[37px] lg:w-1/2 lg:mt-0 xl:w-[47%]'>
          <picture>
            <source
              srcSet='./img/feature/feature-card-3x.png'
              media='(min-width: 1536px)'
            />
            <source
              srcSet='./img/feature/feature-card-2x.png'
              media='(min-width: 768px)'
            />
            <source
              srcSet='./img/feature/feature-card-1x.png'
              media='(min-width: 300px)'
            />
            <img
              loading='lazy'
              decoding='async'
              alt='Tangem card image'
              src='./img/feature/feature-card-2x.png'
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
            Ultra secure backup
          </h2>
          <p
            className='text-secondary text-xl leading-6 font-normal my-[1.875rem]
            xl:text-3xl xl:leading-9 xl:font-light xl:mt-6 xl:mb-[50px]'
          >
            You can connect up to three cards to one wallet, so you'll always have a way to use wallet if your main card is lost, stolen, or damaged.</p>
          <button
            onClick={() => router.push('/pricing')}
            className='w-full sm:w-auto flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[51.5px] py-[12px]
            text-white rounded-[18px] bg-[#141d26] hover:bg-[#06090d] transition ease-in-out duration-300
            sm:mr-4 xl:w-[192px] xl:text-[18px] xl:py-4 xl:px-[61.5px]'
          >
            Buy now
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
            Thousands of currencies
          </h2>
          <p
            className='text-secondary text-xl leading-6 font-normal my-[1.875rem]
            xl:text-3xl xl:leading-9 xl:font-light xl:max-w-[550px] xl:mt-6 xl:mb-[50px]'
          >
            A hardware wallet for your Bitcoin, Ethereum and many more currencies simultaneously - all in one card.
          </p>
            <div className='max-w-[345px] xl:max-w-full flex justify-between sm:justify-start'>
            <button
              onClick={() => router.push('/pricing')}
              className='w-[168px] md:w-auto flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[51.5px] py-[12px]
              text-white rounded-[18px] bg-[#141d26] hover:bg-[#06090d] transition ease-in-out duration-300
              sm:mr-4 xl:w-[192px] xl:text-[18px] xl:py-4 xl:px-[61.5px]'
            >
              Buy now
            </button>
            <button
              onClick={() => router.push('/search')}
              className='w-[168px] md:w-auto flex cursor-pointer justify-center items-center text-[17px] leading-[22px] font-semibold px-[21px] py-[12px]
              text-primary rounded-[18px] bg-[#ecedee] hover:bg-[#dee0e1] transition ease-in-out duration-300
              xl:w-[192px] xl:text-[18px] xl:py-4 xl:px-[30px]'
            >
              <SearchIcon className='mr-3' />
              Search
            </button>
          </div>
        </div>
        
        {/* Right Side */}
        <div className='md:w-1/2 lg:w-3/5 xl:w-[55%]'>
          <picture>
            <source
              srcSet='./img/feature/feature-crypto-3x.png'
              media='(min-width: 1536px)'
            />
            <source
              srcSet='./img/feature/feature-crypto-2x.png'
              media='(min-width: 768px)'
            />
            <source
              srcSet='./img/feature/feature-crypto-1x.png'
              media='(min-width: 300px)'
            />
            <img
              loading='lazy'
              decoding='async'
              alt='Tangem crcard image'
              src='./img/feature/feature-crypto-2x.png'
              className='w-full'
            />
          </picture>
        </div>
        
      </div>
    </section>
  )
}

export default SectionFeature
