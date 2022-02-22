import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { TANGEM_COINS_API_URI } from '../../config'

import SearchIcon from '../../../public/svg/search.svg'

const Search = () => {

  const router = useRouter()

  const searchRef = useRef(null)
  const [isLoading, setLoading] = useState(false)
  const [searchToken, setSearchToken] = useState('')
  const [tokenList, setTokenList] = useState([])

  useEffect(() => {
    if (searchRef?.current) {
      searchRef?.current.focus()
    }
  }, [])

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

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const fetchToken = async (value) => {
    if (value.length < 2) return
    const response = await fetch(`${TANGEM_COINS_API_URI}find?search=${value}`)
    const coins = await response.json()
    setTimeout(() => {
      setTokenList(coins.tokens)
    }, 500)
  }

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta name="description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tangem.com" />
        <meta property="og:site_name" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
        <meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
        <meta property="og:locale" content="en_US" />
        <title>Tangem Wallet — hardware wallet for your crypto</title>
        <link rel='shortcut icon' href='/img/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
      </Head>
      <div className='w-full'>
        
        <img
          src='./img/common/close.png'
          onClick={() => router.push('/')}
          className='absolute top-0 right-1.5 max-w-[36px] cursor-pointer'
        />

        <div className='text-[#090E13] text-32px text-center font-semibold mt-[40px] mb-32px lg:mb-10'>Search</div>

        <div className='flex flex-col w-full h-full'>
          
          <div className='w-full h-full flex items-center px-4 lg:px-0 lg:container lg:mx-auto'>
            <SearchIcon className='mr-2.5' />
            <input
              type='text'
              ref={searchRef}
              value={searchToken}
              onChange={handleSearchToken}
              placeholder='Search in 10087 cryptocurrencies'
              style={{ outline: 'none' }}
              className='w-full bg-transparent h-[28px] text-xl xl:text-3xl text-[#A6AAAD] font-light outline-0'
            />
          </div>

          <span className='block pb-13px border-b border-[#A6AAAD] opacity-20'></span>

          <div className='lg:container lg:mx-auto h-full'>
            <div className="px-4 lg:px-0 absolute overflow-y-scroll w-full h-full">
              <div className='flex flex-col'>
                {tokenList && !isLoading ? tokenList?.map(({ name, symbol, images }, id) => (
                  <div key={id} className='flex mt-5'>
                    <span className='block mr-3.5 w-14 basis-[15%] md:basis-[70px]'>
                      {images?.large ? <img src={images?.large} alt={name} className='w-full h-full object-contain' /> : (
                        <span className='flex justify-center items-center font-bold text-xl rounded-full bg-white border border-[#ECECEC] w-[56px] h-[56px]'>
                          {symbol[0]}
                        </span>
                      )}
                    </span>
                    <span className='flex-[2_2_0%]'>
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
                )) : (
                  <div className='w-full'>
                    <div className="p-4 max-w-sm w-full mx-auto lg:mx-0">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                          <div className="h-2 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 max-w-sm w-full mx-auto lg:mx-0">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                          <div className="h-2 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 max-w-sm w-full mx-auto lg:mx-0">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                          <div className="h-2 bg-slate-200 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
