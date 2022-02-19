import React, { useState } from 'react'
import { useLockScroll } from '../../hooks/useLockScroll'
import { TANGEM_COINS_API_URI } from '../../config'

import CloseIcon from '../../../public/svg/close.svg'
import SearchIcon from '../../../public/svg/search.svg'

const SearchModal = ({ searchModal, handleSearch }) => {

  useLockScroll(searchModal)

  const [isLoading, setLoading] = useState(false)
  const [searchToken, setSearchToken] = useState('')
  const [tokenList, setTokenList] = useState([])

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
                          src='/img/feature/coin-group.png'
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
        </div>
      </div>
    </div>
  )
}

export default SearchModal