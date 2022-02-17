import React, { useState } from 'react'
import Link from 'next/link'
import { TANGEM_COINS_API_URI } from '../../config'
import SearchIcon from '../../../public/svg/search.svg'
import CloseIcon from '../../../public/svg/close.svg'

const dummyList = [{
  title: '1intch',
  iconPath: '/img/search/1intch.png',
  coinGroup: '/img/search/coin-group.png'
}, {
  title: 'btc',
  iconPath: '/img/search/1intch.png',
  coinGroup: '/img/search/coin-group.png'
}, {
  title: 'eth',
  iconPath: '/img/search/1intch.png',
  coinGroup: '/img/search/coin-group.png'
}, {
  title: 'stellar',
  iconPath: '/img/search/1intch.png',
  coinGroup: '/img/search/coin-group.png'
}]

export const Features = () => {

  const [isSearchOpen, setSearchOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [searchToken, setSearchToken] = useState('')
  const [tokenList, setTokenList] = useState([])

  const handleSearch = () => {
    setSearchOpen(!isSearchOpen)
  }

  const handleSearchToken = (e) => {
    setLoading(true)
    const searchedValue = e.target.value
    setSearchToken(searchedValue)
    if (searchedValue === '') {
      setTokenList([])
      setLoading(false)
      return
    } 
    fetchToken(searchedValue)
    setLoading(false)
  }

  const fetchToken = async (value) => {
    if (value.length < 2) return
    const response = await fetch(`${TANGEM_COINS_API_URI}find?search=${value}`)
    const coins = await response.json()
    setTokenList(coins.tokens)
  }

  return (
    <>
    {isSearchOpen && (
      <>
        <div className='fixed flex overflow-auto z-50 bg-white left-0 right-0 top-0 bottom-0'>
          <div className='w-full relative'>
            <div className='w-full h-full bg-white rounded'>
              <div className='lg:container lg:mx-auto'>
                <span className='flex justify-end p-1.5' onClick={handleSearch}>
                  <CloseIcon />
                </span>
              </div>
              <div className='lg:container lg:mx-auto'>
                <div className='w-full flex items-center px-4 lg:px-0'>
                  <span className='w-full flex items-center'>
                    <SearchIcon className='mr-2.5' />
                    <input
                      type="text"
                      value={searchToken}
                      onChange={handleSearchToken}
                      placeholder='Search in 10087 cryptocurrencies'
                      className='w-full text-xl xl:text-3xl text-[#A6AAAD] font-light outline-0'
                    />
                  </span>
                </div>
              </div>
              <span className='block pb-13px border-b border-[#A6AAAD] opacity-20'></span>
              <div className='lg:container lg:mx-auto'>
                <div className="px-4 lg:px-0">
                  <div className='flex flex-col'>
                    {isLoading ? (
                      <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                          <div class="h-2 bg-slate-200 rounded"></div>
                          <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                              <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                      ) : tokenList?.map(({ name, symbol, images }, id) => (
                      <div key={id} className='flex mt-5'>
                        <span className='mr-3.5 w-14'>
                          <img src={images?.large} alt={name} />
                        </span>
                        <span>
                          <span className='text-black text-xl font-medium'>
                            {name} {symbol}
                          </span>
                          <span className='block h-4 mt-1.5'>
                            <img
                              src='/img/search/coin-group.png'
                              alt='coin group'
                              className='h-full'
                              loading='lazy'
                              decoding='async'
                            />
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* <span className='block pb-13px border-b border-[#A6AAAD] opacity-20'></span> */}

              {/* <div className='py-7 px-4'>
                <span className='uppercase text-base xl:text-lg text-[#A6AAAD] font-semibold'>Recent searches</span>
                <div className='mt-5 flex flex-col overflow-y-auto max-h-80'>
                  {dummyList.map(({ title, iconPath, coinGroup }, id) => (
                    <div key={id} className='flex mb-5'>
                      <span className='mr-3.5 w-14'>
                        <img src={iconPath} alt='1intch coin' />
                      </span>
                      <span>
                        <span className='text-black text-xl font-medium'>
                          {title}
                        </span>
                        <span className='block h-4 mt-1.5'>
                          <img src={coinGroup} alt='coin group' className='h-full' />
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </>
    )}
      <div className='mb-28 xl:mb-32'>
        <div className="flex flex-wrap md:flex-nowrap justify-between lg:justify-start mx-auto">
          <div className='md:order-last px-4 md:px-12 lg:pl-0 lg:ml-36 md:flex md:flex-col md:justify-center max-w-2xl'>
            <h2 className='text-6xl xl:text-8xl font-semibold leading-95'>Ultra secure backup</h2>
            <p className='lg:w-full lg:max-w-2xl text-xl xl:text-3xl text-neutral-400 my-7 md:mt-6 md:mb-12'>You can connect up to three cards to one wallet, so you'll always have a way to use wallet if your main card is lost, stolen, or damaged.</p>
            <div className='flex'>
              <Link href='#'>
                <a className='w-3/6 lg:w-32 flex justify-center text-base lg:text-lg font-semibold text-white bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 py-3 rounded-20px mr-2 lg:mr-4'>Buy now</a>
              </Link>
              <Link href='#'>
                <a className='w-3/6 lg:w-48 flex justify-center text-base lg:text-lg font-semibold text-neutral-900 bg-[#ecedee] hover:bg-[#DEE0E1] transition ease-in-out duration-300 py-3 rounded-20px'>Learn more</a>
              </Link>
            </div>
          </div>
          <div className='w-full lg:w-auto mx-auto mt-7 md:mt-0 lg:mx-0'>
            <picture>
              <source media='(max-width: 768px)' srcSet='./img/features/1-features-1x.png' />
              <source media='(min-width: 769px)' srcSet='./img/features/1-features-2x.png' />
              <img
                src='./img/features/features-2x.png'
                alt='Tangem Features image'
                className='w-full'
                loading='lazy'
                decoding='async'
              />
            </picture>
          </div>
        </div>
      </div>
      <div className='mb-28 xl:mb-32'>
        <div className="flex flex-wrap md:flex-nowrap justify-between lg:justify-start mx-auto">
          <div className='px-4 md:px-12 lg:pl-0 lg:ml-28 md:flex md:flex-col md:justify-center max-w-2xl'>
            <h2 className='text-6xl xl:text-8xl font-semibold leading-95'>Thousands of currencies</h2>
            <p className='lg:w-full lg:max-w-2xl text-xl xl:text-3xl text-neutral-400 my-7 md:mt-6 md:mb-12'>A hardware wallet for your Bitcoin, Ethereum and many more currencies simultaneously – all in one card.</p>
            <div className='flex'>
              <Link href='#'>
                <a className='w-3/6 lg:w-32 flex justify-center text-base lg:text-lg font-semibold text-white bg-[#141D26] hover:bg-[#06090D] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px mr-2 lg:mr-4'>Buy now</a>
              </Link>
              <button onClick={handleSearch} className='w-3/6 lg:w-48 flex justify-center items-center text-base lg:text-lg font-semibold text-neutral-900 bg-[#ecedee] hover:bg-[#DEE0E1] transition ease-in-out duration-300 py-3 rounded-18px lg:rounded-20px'>
                <SearchIcon className='mr-3' />
                Search
              </button>
            </div>
          </div>
          <div className='md:order-last w-full lg:w-auto mx-auto mt-7 md:mt-0 lg:mx-0'>
            <picture>
              <source media='(max-width: 768px)' srcSet='./img/features/2-features-1x.png' />
              <source media='(min-width: 769px)' srcSet='./img/features/2-features-2x.png' />
              <img
                src='./img/features/features-2x.png'
                alt='Tangem Features image'
                className='w-full'
                loading='lazy'
                decoding='async'
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  )
}
